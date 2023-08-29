const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const process = require("process");

async function main() {
  // Clients =====
  await prisma.clients.create({
    data: {
      name: "Cibele",
      phone: "14998765432",
      password: "asdfasdf3",
    },
  });
  await prisma.clients.create({
    data: {
      name: "Jenifer",
      phone: "14968765432",
      password: "asdfqwer3",
    },
  });
  await prisma.clients.create({
    data: {
      name: "Maria",
      phone: "16968065432",
      password: "zxcvasdf3",
    },
  });
  // Clients =====

  // Services =====
  await prisma.services.create({
    data: {
      name: "Corte de Cabelo",
    },
  });
  await prisma.services.create({
    data: {
      name: "Unhas das Mãos",
    },
  });
  await prisma.services.create({
    data: {
      name: "Unhas dos Pés",
    },
  });
  await prisma.services.create({
    data: {
      name: "Penteado",
    },
  });
  // Services =====

  // Schedules =====
  await prisma.schedules.create({
    data: {
      client_id: 1,
      service_id: 2,
      date_time: "2023-08-30T15:30:00.000Z",
    },
  });
  await prisma.schedules.create({
    data: {
      client_id: 1,
      service_id: 3,
      date_time: "2023-08-30T15:30:00.000Z",
    },
  });
  await prisma.schedules.create({
    data: {
      client_id: 2,
      service_id: 4,
      date_time: "2023-08-30T16:00:00.000Z",
    },
  });
  // Schedules =====

  // Admins =====
  await prisma.admins.create({
    data: {
      user: "admin01",
      password: "zxcvasdf999",
    },
  });
  // Admins =====
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
