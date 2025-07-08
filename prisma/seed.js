const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const seed = async () => {
  await prisma.user.createMany({
    data: [
      { name: "omkar", email: "omkar@gmail.com" },
      { name: "shivjai", email: "shivaji@gmail.com" }
    ]
  });
};

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });