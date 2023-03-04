/*
  Warnings:

  - You are about to drop the column `interestListId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `netid` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `_admins` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_clubMembers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_interestedClubs` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `netId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_admins" DROP CONSTRAINT "_admins_A_fkey";

-- DropForeignKey
ALTER TABLE "_admins" DROP CONSTRAINT "_admins_B_fkey";

-- DropForeignKey
ALTER TABLE "_clubMembers" DROP CONSTRAINT "_clubMembers_A_fkey";

-- DropForeignKey
ALTER TABLE "_clubMembers" DROP CONSTRAINT "_clubMembers_B_fkey";

-- DropForeignKey
ALTER TABLE "_interestedClubs" DROP CONSTRAINT "_interestedClubs_A_fkey";

-- DropForeignKey
ALTER TABLE "_interestedClubs" DROP CONSTRAINT "_interestedClubs_B_fkey";

-- DropIndex
DROP INDEX "User_interestListId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "interestListId",
DROP COLUMN "netid",
ADD COLUMN     "netId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_admins";

-- DropTable
DROP TABLE "_clubMembers";

-- DropTable
DROP TABLE "_interestedClubs";

-- CreateTable
CREATE TABLE "ClubAdmin" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "clubId" UUID NOT NULL,

    CONSTRAINT "ClubAdmin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClubFollowed" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "clubId" UUID NOT NULL,

    CONSTRAINT "ClubFollowed_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ClubAdmin" ADD CONSTRAINT "ClubAdmin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClubAdmin" ADD CONSTRAINT "ClubAdmin_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "Club"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClubFollowed" ADD CONSTRAINT "ClubFollowed_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClubFollowed" ADD CONSTRAINT "ClubFollowed_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "Club"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
