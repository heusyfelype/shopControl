import { Users } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as usrRepository from "../repository/usrRepository.js";

export type registerUserType = Omit<Users, "id" | "createdAt">
export type loginUserType = Omit<Users, "id" | "createdAt" | "name">

export async function create(infos: registerUserType) {
    const hasUser = await usrRepository.selectUserByEmail(infos.email)
    if (hasUser) {
        throw { type: "conflict", message: "Email já cadastrado" }
    }
    const hashPass = bcrypt.hashSync(infos.password, 12)
    infos.password = hashPass
    await usrRepository.createUser(infos)
}

export async function signin(infos: loginUserType) {
    const user = await usrRepository.selectUserByEmail(infos.email)
    if (!user) {
        throw { type: "unauthorized", message: "Usuário não cadastrado!" }
    }
    if (bcrypt.compareSync(infos.password, user.password)) {
        const expireConfig = { expiresIn: 60 * 60 * 12 }
        const token = jwt.sign({ data: { userId: user.id } }, process.env.JWT_SECRET, expireConfig)
        return { token, userId: user.id }
    }
    throw { type: "unauthorized", message: "Email ou senha incorretos!" }
}