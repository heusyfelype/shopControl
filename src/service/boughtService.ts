import { buyingType } from "./buyingService";
import { boughtRepository, BoughtType } from "../repository/boughtRepository.js";
import dayjs from 'dayjs';

export type createBoughtTypeService = { name: string, userId: number, total: number, items: buyingType[] }
async function createBought(infos: createBoughtTypeService) {
    const month = dayjs(Date.now()).format('MM/YYYY').toString();

    const newBoughtResume = await boughtRepository.createBoughtResume({ userId: infos.userId, name: infos.name, month, total: infos.total })

    const arrBought: BoughtType[] = [];
    console.log("NEWBOUGHRESUME: ", newBoughtResume)

    for (let eachItem of infos.items) {
        console.log("EACHITEM_STATUSTEXT:", eachItem.statusText)
        const statusId = await boughtRepository.getStatusIdByName(eachItem.statusText)
        const brand = await boughtRepository.upsertBrand(eachItem.brandText)
        const units = await boughtRepository.getUnitIdByName(eachItem.unitText)
        const itemTable = await boughtRepository.upsertItemTable({ name: eachItem.nameText, brandId: brand.id, unitId: units, vol: eachItem.vol })

        arrBought.push({
            boughtResumeId: newBoughtResume.id,
            brandId: brand.id,
            itemId: itemTable.id,
            name: itemTable.name,
            positionIndex: eachItem.positionIndex,
            price: eachItem.price,
            qtt: eachItem.qtt,
            statusId,
            unitId: units,
            userId: infos.userId,
            vol: eachItem.vol
        })

    }
    await boughtRepository.createBought(arrBought)

    console.log(newBoughtResume)
    return 200
}

export const boughtService = {
    createBought
}