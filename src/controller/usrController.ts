
import { Request, Response } from "express";

export async function create(req:Request, res:Response) {

    const infos  = req.body
    // await registerUserService(infos)

    res.sendStatus(201);
}

export async function signin(req:Request, res:Response) {

    const infos  = req.body
    // const tokenAndUserId = await signInService(infos)

    // res.locals.token = tokenAndUserId.token
    // res.send(tokenAndUserId); 

}