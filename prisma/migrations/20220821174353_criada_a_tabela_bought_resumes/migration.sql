/*
  Warnings:

  - Added the required column `boughtResumeId` to the `bought` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bought" ADD COLUMN     "boughtResumeId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "boughtResume" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "month" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "boughtResume_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bought" ADD CONSTRAINT "bought_boughtResumeId_fkey" FOREIGN KEY ("boughtResumeId") REFERENCES "boughtResume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "boughtResume" ADD CONSTRAINT "boughtResume_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
