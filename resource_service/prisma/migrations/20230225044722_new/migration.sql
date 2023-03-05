/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "email" VARCHAR(100) NOT NULL,
ADD COLUMN     "isComplete" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "tokenversion" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");
