/*
  Warnings:

  - Added the required column `positionIndex` to the `bought` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bought" ADD COLUMN     "positionIndex" INTEGER NOT NULL;
