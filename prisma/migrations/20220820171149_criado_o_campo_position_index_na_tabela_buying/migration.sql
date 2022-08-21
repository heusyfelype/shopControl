/*
  Warnings:

  - Added the required column `positionIndex` to the `buying` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "buying" ADD COLUMN     "positionIndex" INTEGER NOT NULL,
ALTER COLUMN "nameText" SET DEFAULT '',
ALTER COLUMN "brandText" SET DEFAULT '',
ALTER COLUMN "vol" SET DEFAULT 0,
ALTER COLUMN "qtt" SET DEFAULT 0,
ALTER COLUMN "price" SET DEFAULT 0;
