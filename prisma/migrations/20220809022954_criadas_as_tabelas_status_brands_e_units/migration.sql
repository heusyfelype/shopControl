/*
  Warnings:

  - The `unitText` column on the `buying` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `statusText` on the `buying` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "StatusOptions" AS ENUM ('default', 'bought', 'not_bought');

-- CreateEnum
CREATE TYPE "UnitsOptions" AS ENUM ('g', 'ml');

-- AlterTable
ALTER TABLE "buying" DROP COLUMN "statusText",
ADD COLUMN     "statusText" "StatusOptions" NOT NULL,
DROP COLUMN "unitText",
ADD COLUMN     "unitText" "UnitsOptions" NOT NULL DEFAULT 'g';

-- DropEnum
DROP TYPE "Status";

-- DropEnum
DROP TYPE "Units";

-- CreateTable
CREATE TABLE "status" (
    "id" SERIAL NOT NULL,
    "name" "StatusOptions" NOT NULL,

    CONSTRAINT "status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "brands" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "units" (
    "id" SERIAL NOT NULL,
    "name" "UnitsOptions" NOT NULL,

    CONSTRAINT "units_pkey" PRIMARY KEY ("id")
);
