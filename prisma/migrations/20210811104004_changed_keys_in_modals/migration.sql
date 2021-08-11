/*
  Warnings:

  - You are about to drop the column `doctor_id` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `practice_name` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `Doctor` table. All the data in the column will be lost.
  - Added the required column `doctorId` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `practiceName` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Doctor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_doctor_id_fkey";

-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "doctor_id",
DROP COLUMN "practice_name",
ADD COLUMN     "doctorId" INTEGER NOT NULL,
ADD COLUMN     "practiceName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Doctor" DROP COLUMN "first_name",
DROP COLUMN "last_name",
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Appointment" ADD FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
