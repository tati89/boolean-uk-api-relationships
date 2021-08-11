-- CreateTable
CREATE TABLE "Doctor" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "specialty" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "id" SERIAL NOT NULL,
    "doctor_id" INTEGER NOT NULL,
    "practice_name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reason" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Appointment" ADD FOREIGN KEY ("doctor_id") REFERENCES "Doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
