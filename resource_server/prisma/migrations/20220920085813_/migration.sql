-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "firstname" VARCHAR(255) NOT NULL DEFAULT '',
    "lastname" VARCHAR(255) NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "friends" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "friendId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "block" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "friends_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "friends_friendId_userId_key" ON "friends"("friendId", "userId");

-- AddForeignKey
ALTER TABLE "friends" ADD CONSTRAINT "friends_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friends" ADD CONSTRAINT "friends_friendId_fkey" FOREIGN KEY ("friendId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
