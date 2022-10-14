/*
  Warnings:

  - You are about to drop the column `assignerId` on the `Tasks` table. All the data in the column will be lost.
  - You are about to drop the column `assignerName` on the `Tasks` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Tasks` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `Tasks` table. All the data in the column will be lost.
  - Added the required column `assigneeId` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `assigneeName` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `assignorId` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `assignorName` to the `Tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tasks" DROP COLUMN "assignerId",
DROP COLUMN "assignerName",
DROP COLUMN "userId",
DROP COLUMN "userName",
ADD COLUMN     "assigneeId" TEXT NOT NULL,
ADD COLUMN     "assigneeName" TEXT NOT NULL,
ADD COLUMN     "assignorId" TEXT NOT NULL,
ADD COLUMN     "assignorName" TEXT NOT NULL;
