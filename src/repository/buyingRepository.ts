import { prisma } from "../database.js";
import { buyingType } from "../service/buyingService.js";



async function create(infos: buyingType) {
    const { userId, statusText, nameText, brandText, vol, unitText, qtt, price } = infos
    await prisma.buying.create({
        data: {
            userId,
            statusText,
            nameText,
            brandText,
            vol,
            unitText,
            qtt,
            price
        }
    })
    return 201;
}

async function update(infos: buyingType) {
    const { id, userId, statusText, nameText, brandText, vol, unitText, qtt, price } = infos
    await prisma.buying.update({
        where: {
            id
        },
        data: {
            userId,
            statusText,
            nameText,
            brandText,
            vol,
            unitText,
            qtt,
            price
        }
    })
    return 202;
}

export const buyingRepository = {
    create,
    update
}