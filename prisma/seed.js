const { PrismaClient } = require("@prisma/client");

const dbClient = new PrismaClient();

const { doctors, appointments } = require("../src/utils/mochData");

async function seed() {
  for (const doctor of doctors) {
    await dbClient.doctor.create({
      data: doctor,
    });
  }

  for (const appointment of appointments) {
    await dbClient.appointment.create({
      data: appointment,
    });
  }
}

seed().finally(() => {
  dbClient.$disconnect();
});
