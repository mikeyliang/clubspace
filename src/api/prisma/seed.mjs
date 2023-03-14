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
  // users
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

  // enum for colleges
  const colleges = {
    agricultureAndLifeSciences: "College of Agriculture and Life Sciences",
    architectureArtAndPlanning: "College of Architecture, Art and Planning",
    business: "Cornell SC Johnson College of Business",
    computingAndInformationScience: "Cornell College of Computing and Information Science",
    humanEcology: "College of Human Ecology",
    publicPolicy: "College of Public Policy",
    ILR: "School of Industrial and Labor Relations",
    artsAndSciences: 'College of Arts and Sciences',
    engineering: 'College of Engineering',
  };
  function getRandomCollege() {
    const values = Object.values(colleges);
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
  }


  // clubs
  for (let i = 0; i < 100; i++) {
    const clubName = faker.name.jobType()
    const club = await prisma.club.create({
      data: {
        name: clubName + " Club",
        description: faker.lorem.sentence(),
        email: faker.internet.email(),
        location: faker.address.street(),
        college: getRandomCollege(),
        website: clubName + ".com",
        meetTime: faker.datatype.datetime(),
      }
    })
    
    console.log(club)
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
