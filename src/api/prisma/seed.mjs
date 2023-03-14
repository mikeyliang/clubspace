import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // delete previous data
  await prisma.interestEvent.deleteMany();
  await prisma.clubFollowed.deleteMany();
  await prisma.clubAdmin.deleteMany();
  await prisma.event.deleteMany();
  await prisma.image.deleteMany();
  await prisma.dm_ClubType.deleteMany();
  await prisma.club.deleteMany();
  await prisma.user.deleteMany();

  // create new data
  for (let i = 0; i < 100; i++) {
    const netId =
      faker.random.alpha({
        count: Math.floor(Math.random() * 2) + 2,
        casing: "lower",
      }) + faker.datatype.number({ max: 999 });
    const user = await prisma.user.create({
      data: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: netId + "@cornell.edu",
        netId: netId,
      },
    });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
