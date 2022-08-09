-- CreateEnum
CREATE TYPE "Status" AS ENUM ('bought', 'not_bought', 'default');

-- CreateEnum
CREATE TYPE "Units" AS ENUM ('g', 'ml');

-- CreateTable
CREATE TABLE "Buying" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "statusText" "Status" NOT NULL,
    "nameText" TEXT NOT NULL,
    "brandText" TEXT NOT NULL,
    "vol" INTEGER NOT NULL,
    "unitText" "Units" NOT NULL DEFAULT 'g',
    "qtt" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Buying_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Buying" ADD CONSTRAINT "Buying_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
