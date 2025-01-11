/*
  Warnings:

  - You are about to drop the `oauth_accounts` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "auth_provider_options" AS ENUM ('CREDENTIALS', 'GOOGLE', 'FACEBOOK', 'APPLE');

-- DropForeignKey
ALTER TABLE "oauth_accounts" DROP CONSTRAINT "oauth_accounts_user_id_fkey";

-- DropTable
DROP TABLE "oauth_accounts";

-- DropEnum
DROP TYPE "oauth_provider_options";

-- CreateTable
CREATE TABLE "auth_providers" (
    "provider_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "provider_type" "auth_provider_options" NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "auth_providers_pkey" PRIMARY KEY ("provider_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "auth_providers_provider_type_email_key" ON "auth_providers"("provider_type", "email");

-- AddForeignKey
ALTER TABLE "auth_providers" ADD CONSTRAINT "auth_providers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
