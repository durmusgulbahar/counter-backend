/*
  Warnings:

  - You are about to drop the `Value` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Value";

-- CreateTable
CREATE TABLE "Log" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "request_type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);
