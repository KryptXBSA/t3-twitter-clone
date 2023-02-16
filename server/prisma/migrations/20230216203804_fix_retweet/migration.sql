/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Retweet` table. All the data in the column will be lost.
  - You are about to drop the column `likesCount` on the `Tweet` table. All the data in the column will be lost.
  - You are about to drop the column `repliesCount` on the `Tweet` table. All the data in the column will be lost.
  - You are about to drop the column `retweetsCount` on the `Tweet` table. All the data in the column will be lost.
  - You are about to drop the column `viewsCount` on the `Tweet` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Retweet" DROP COLUMN "createdAt",
ADD COLUMN     "retweetDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Tweet" DROP COLUMN "likesCount",
DROP COLUMN "repliesCount",
DROP COLUMN "retweetsCount",
DROP COLUMN "viewsCount",
ADD COLUMN     "likeCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "replyCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "retweetCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "viewCount" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
