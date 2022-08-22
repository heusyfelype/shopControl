import { prisma } from "../database.js";
import { buyingType } from "../service/buyingService.js";

import { Bought, BoughtsResumes, Items } from "@prisma/client"

async function getStatusIdByName(name: 'default' | 'bought' | 'not_bought') {
    const { id } = await prisma.status.findFirst({ where: { name } });
    return id;
}

async function upsertBrand(name: string) {
    const brand = await prisma.brands.upsert({ where: { name }, update: { name }, create: { name } })
    return brand
}

async function getUnitIdByName(name: 'g' | 'ml' | 'unid') {
    const { id } = await prisma.units.findFirst({ where: { name } })
    return id
}


export type itemType = Omit<Items, 'id' | 'createdAt' | 'timesUsed'>
async function upsertItemTable(infos: itemType) {
    const item = await prisma.items.upsert({
        where: { name: infos.name }, update: {
            timesUsed: { increment: 1 },
        }, create: {
            name: infos.name,
            timesUsed: 1,
            vol: infos.vol,
            brandId: infos.brandId,
            unitId: infos.unitId
        }
    })
    return item;
}

async function getItemBySearchName(text: string) {
    const item = await prisma.$queryRaw`SELECT name, "timesUsed", vol, "brandId", "unitId" FROM items WHERE name ILIKE %${text}`
    return item;
}
export type BoughtType = Omit<Bought, 'id' | 'createdAt'>
async function createBought(infos: BoughtType[]) {
    await prisma.bought.createMany({ data: infos })
}

export type boughtResumeType = Omit<BoughtsResumes, 'id' | 'createdAt'>
async function createBoughtResume(infos: boughtResumeType) {
    const resume = await prisma.boughtsResumes.create({ data: infos })
    return resume;
}

async function getBoughtsByBoughtResumeid(boughtResumeId: number) {
    const boughts = await prisma.bought.findMany({
        where: {
            boughtResumeId
        }, orderBy: {
            createdAt: 'desc'
        }
    })
}

export const boughtRepository = {
    getStatusIdByName,
    upsertBrand,
    getUnitIdByName,
    upsertItemTable,
    getItemBySearchName,
    createBought,
    createBoughtResume,
    getBoughtsByBoughtResumeid
}