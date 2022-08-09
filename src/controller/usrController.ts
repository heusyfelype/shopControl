
import { Request, Response } from "express";
import * as usrService from "../service/usrService.js"

export async function create(req: Request, res: Response) {

    const infos : usrService.registerUserType = req.body
    await usrService.create(infos)

    res.sendStatus(201);
}

export async function signin(req: Request, res: Response) {

    const infos: usrService.signinUserType = req.body
    const tokenAndUserId = await usrService.signin(infos)

    res.locals.token = tokenAndUserId.token
    res.send(tokenAndUserId);

}