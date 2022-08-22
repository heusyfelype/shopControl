/*
  Warnings:

  - Added the required column `total` to the `boughtResume` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "boughtResume" ADD COLUMN     "total" INTEGER NOT NULL;
