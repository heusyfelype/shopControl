import { prisma } from "../database.js";
import { buyingType } from "../service/buyingService.js";



async function create(infos: buyingType) {
    const { userId, statusText, nameText, brandText, vol, unitText, qtt, price, positionIndex } = infos
    await prisma.buying.create({
        data: {
            userId,
            statusText,
            nameText,
            brandText,
            vol,
            unitText,
            qtt,
            price,
            positionIndex
        }
    })
    return 201;
}

async function update(infos: buyingType) {
    const { id, userId, statusText, nameText, brandText, vol, unitText, qtt, price, positionIndex } = infos
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
            price,
            positionIndex
        }
    })
    return 202;
}

async function deleteItem(id: number) {
    await prisma.buying.delete({ where: { id } })
}

async function findItemById(id: number) {
    return await prisma.buying.findFirst({
        where: { id }
        // select: {
        //     id: true,
        //     statusText: true,
        //     nameText: true,
        //     brandText: true,
        //     vol: true,
        //     unitText: true,
        //     qtt: true,
        //     price: true,
        //     positionIndex: true
        // }
    })
}

async function findMany(userId: number) {
    return await prisma.buying.findMany({ orderBy: [{ positionIndex: 'asc' }], where: { userId } })
}

async function updateMany(items: buyingType[], userId: number) {
    items.map(async ({ id, statusText, nameText, brandText, positionIndex, price, qtt, unitText, userId, vol }) => {
        await prisma.buying.update({
            where: { id }, data: {
                brandText,
                id,
                nameText,
                positionIndex,
                price,
                qtt,
                statusText,
                unitText,
                userId,
                vol
            }
        })
    })
}

async function deleteManyByUserId(userId:number) {
    await prisma.buying.deleteMany({where:{userId}})
}

export const buyingRepository = {
    create,
    update,
    deleteItem,
    findItemById,
    findMany,
    updateMany,
    deleteManyByUserId
}