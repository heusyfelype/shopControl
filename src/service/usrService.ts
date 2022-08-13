import { Users } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { usrRepository } from "../repository/usrRepository.js";

export type registerUserType = Omit<Users, "id" | "createdAt">
export type signinUserType = Omit<Users, "id" | "createdAt" | "name">

async function create(infos: registerUserType) {
    const hasUser = await usrRepository.selectUserByEmail(infos.email)
    if (hasUser) {
        throw { type: "conflict", message: "Email já cadastrado" }
    }
    const hashPass = bcrypt.hashSync(infos.password, 12)
    infos.password = hashPass
    await usrRepository.createUser(infos)
}

async function signin(infos: signinUserType) {
    const user = await usrRepository.selectUserByEmail(infos.email)
    if (!user) {
        throw { type: "unauthorized", message: "Usuário não cadastrado!" }
    }
    if (bcrypt.compareSync(infos.password, user.password)) {
        const expireConfig = { expiresIn: 60 * 60 * 12 }
        const token = jwt.sign({ data: { userId: user.id } }, process.env.JWT_SECRET, expireConfig)
        return { token }
    }
    throw { type: "unauthorized", message: "Email ou senha incorretos!" }
}

export const usrService = {
    create,
    signin
}