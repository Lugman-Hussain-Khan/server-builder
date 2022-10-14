/*
  Warnings:

  - Added the required column `workingDays` to the `Tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tasks" ADD COLUMN     "workingDays" TEXT NOT NULL;
