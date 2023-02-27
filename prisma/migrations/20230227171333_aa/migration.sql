/*
  Warnings:

  - You are about to drop the column `bgImageUrl` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `profileImageUrl` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "bgImageUrl",
DROP COLUMN "imageUrl",
DROP COLUMN "profileImageUrl",
ADD COLUMN     "bgImage" TEXT,
ADD COLUMN     "profileImage" TEXT;
