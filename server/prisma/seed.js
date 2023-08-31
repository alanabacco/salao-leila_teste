const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const process = require("process");

async function main() {
  // Clients =====
  await prisma.clients.create({
    data: {
      name: "Alana",
      phone: "16987654321",
      password: "$2a$08$gyCFbjZRcgEv4.wpKZgpzOfZZJ9TJJCt/pyyDg0y3ZIVWanocDHB2", // 123456
    },
  });
  await prisma.clients.create({
    data: {
      name: "Fulano",
      phone: "14987654321",
      password: "$2a$08$xtnBbR0HNOBYzh/3BiTmq.v1Xb4mD9NoeAL31uMYvwyC.vXiprBk2", // 654321
    },
  });
  await prisma.clients.create({
    data: {
      name: "Ciclana",
      phone: "14998765432",
      password: "$2a$08$q427BhwWgpcXLd71ZcrfRO0LFAH1Zao9kbPbkr7jG16FhOAQ1SJV6", // 142536
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
  await prisma.services.create({
    data: {
      name: "Pintura no cabelo",
    },
  });
  await prisma.services.create({
    data: {
      name: "Hidratação no cabelo",
    },
  });
  // Services =====

  // Schedules =====
  await prisma.schedules.create({
    data: {
      client_id: 1,
      service_id: 2,
      date_time: "2023-08-28T15:30:00.000Z",
    },
  });
  await prisma.schedules.create({
    data: {
      client_id: 1,
      service_id: 4,
      date_time: "2023-08-29T16:30:00.000Z",
    },
  });
  await prisma.schedules.create({
    data: {
      client_id: 1,
      service_id: 5,
      date_time: "2023-08-30T18:30:00.000Z",
    },
  });
  await prisma.schedules.create({
    data: {
      client_id: 2,
      service_id: 1,
      date_time: "2023-08-30T14:30:00.000Z",
    },
  });
  await prisma.schedules.create({
    data: {
      client_id: 1,
      service_id: 1,
      date_time: "2023-08-30T13:30:00.000Z",
    },
  });
  // Schedules =====

  // Admins =====
  await prisma.admins.create({
    data: {
      user: "admin01",
      password: "$2a$08$gyCFbjZRcgEv4.wpKZgpzOfZZJ9TJJCt/pyyDg0y3ZIVWanocDHB2", // 123456
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
