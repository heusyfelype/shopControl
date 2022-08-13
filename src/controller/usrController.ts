
import { Request, Response } from "express";
import { registerUserType, signinUserType, usrService } from "../service/usrService.js";

export async function create(req: Request, res: Response) {

    const infos : registerUserType = req.body
    await usrService.create(infos)

    res.sendStatus(201);
}

export async function signin(req: Request, res: Response) {

    const infos: signinUserType = req.body
    const token = await usrService.signin(infos)

    res.send(token);

}