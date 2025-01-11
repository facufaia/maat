/*
  Warnings:

  - You are about to drop the column `category_name` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `invoices` table. All the data in the column will be lost.
  - The `payment_type` column on the `payments` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `payment_status` column on the `payments` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `service_types` column on the `providers` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `user_id` on the `worker_profile` table. All the data in the column will be lost.
  - Added the required column `name` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Made the column `booking_id` on table `payments` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `description` to the `worker_profile` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "payment_type" AS ENUM ('ADVANCE', 'FINAL');

-- CreateEnum
CREATE TYPE "payment_status" AS ENUM ('PENDING', 'PAID', 'CANCELLED', 'REFUNDED');

-- CreateEnum
CREATE TYPE "service_type" AS ENUM ('LOCAL', 'HOME', 'ONLINE', 'MOBILE');

-- CreateEnum
CREATE TYPE "status_type" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "oauth_provider_options" AS ENUM ('CREDENTIALS', 'GOOGLE', 'FACEBOOK', 'APPLE');

-- DropForeignKey
ALTER TABLE "bookings" DROP CONSTRAINT "bookings_worker_service_id_fkey_custom";

-- DropForeignKey
ALTER TABLE "payments" DROP CONSTRAINT "payments_booking_id_fkey";

-- DropForeignKey
ALTER TABLE "worker_profile" DROP CONSTRAINT "worker_profile_service_id_fkey";

-- DropIndex
DROP INDEX "payments_booking_id_key";

-- DropIndex
DROP INDEX "worker_profile_user_id_key";

-- AlterTable
ALTER TABLE "bookings" ADD COLUMN     "status" "status_type"[];

-- AlterTable
ALTER TABLE "categories" DROP COLUMN "category_name",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "invoices" DROP COLUMN "status";

-- AlterTable
ALTER TABLE "payments" DROP COLUMN "payment_type",
ADD COLUMN     "payment_type" "payment_type" NOT NULL DEFAULT 'ADVANCE',
DROP COLUMN "payment_status",
ADD COLUMN     "payment_status" "payment_status" NOT NULL DEFAULT 'PENDING',
ALTER COLUMN "booking_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "providers" DROP COLUMN "service_types",
ADD COLUMN     "service_types" "service_type"[];

-- AlterTable
ALTER TABLE "worker_profile" DROP COLUMN "user_id",
ADD COLUMN     "description" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "oauth_accounts" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "provider_type" "oauth_provider_options" NOT NULL,
    "provider_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "oauth_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "oauth_accounts_provider_type_provider_id_key" ON "oauth_accounts"("provider_type", "provider_id");

-- CreateIndex
CREATE UNIQUE INDEX "oauth_accounts_provider_type_email_key" ON "oauth_accounts"("provider_type", "email");

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_booking_id_fkey" FOREIGN KEY ("booking_id") REFERENCES "bookings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "oauth_accounts" ADD CONSTRAINT "oauth_accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
