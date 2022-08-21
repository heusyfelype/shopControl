
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export async function validToken(req: Request, res: Response, next: NextFunction) {
    const auth = req.headers.authorization
    const token = auth?.replace('Bearer ', "");
    if (!token) {
        throw { type: "unauthorized", message: "no token" }
    }

    const JWTKey = process.env.JWT_SECRET

    if (jwt.verify(token, JWTKey)) {
        res.locals.userData = jwt.decode(token)
    }

    next()
}