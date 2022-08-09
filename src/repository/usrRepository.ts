
import { prisma } from "../database.js";
import { registerUserType } from "../service/usrService.js";


async function selectUserByEmail(email: string) {
    console.log("está vindo no selectUserBYEmail")
    return await prisma.users.findFirst({ where: { email } })
}

async function createUser(infos: registerUserType) {
    await prisma.users.create({ data: infos })
}

export const usrRepository = {
    selectUserByEmail,
    createUser
}