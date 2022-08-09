
import { prisma } from "../database.js";
import { registerUserType } from "../service/usrService.js";


export async function selectUserByEmail(email: string) {
    return await prisma.users.findFirst({ where: { email } })
}

export async function createUser(infos: registerUserType) {
    await prisma.users.create({ data: infos })
}