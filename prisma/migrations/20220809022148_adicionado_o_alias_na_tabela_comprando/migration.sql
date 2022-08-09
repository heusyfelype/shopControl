/*
  Warnings:

  - You are about to drop the `Buying` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Buying" DROP CONSTRAINT "Buying_userId_fkey";

-- DropTable
DROP TABLE "Buying";

-- CreateTable
CREATE TABLE "buying" (
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

    CONSTRAINT "buying_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "buying" ADD CONSTRAINT "buying_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
