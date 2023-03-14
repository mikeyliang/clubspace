import prisma from "../prisma/client";

async function getUsers() {
  try {
    const users = await prisma.$queryRaw`SELECT * FROM "User"`;
    return users;
  } catch (err: any) {
    throw Error(err.message);
  }
}

async function getUserById(args: { id: string }) {
  try {
    const users =
      await prisma.$queryRaw`SELECT * FROM "User" WHERE id = ${args.id}`;
    return users;
  } catch (err: any) {
    throw Error(err.message);
  }
}

async function create() {}

async function update() {}

export default {
  getUsers,
  getUserById,
  create,
  update,
};
