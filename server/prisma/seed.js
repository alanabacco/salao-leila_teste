const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const process = require("process");

async function main() {
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
      phone: "16968765432",
      password: "zxcvasdf3",
    },
  });
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
