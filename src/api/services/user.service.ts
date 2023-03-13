import { Prisma } from "@prisma/client";
import prisma from "../prisma/client";
import { UserType, userGetWhereType, userCreateDataType, userUpdateWhereType, userUpdateDataType } from '../models/user.model'

async function getUsers() {
  try {
    const users = await prisma.$queryRaw`SELECT * FROM "User"`;
    return users;
  } catch (err: any) {
    throw Error(err.message);
  }
}

async function getUserById(where: userGetWhereType) {
  try {
    const user =
      await prisma.$queryRaw<UserType>`SELECT * FROM "User" WHERE id = ${where.id}::uuid`;
    return user;
  } catch (err: any) {
    throw Error(err.message);
  }
}

async function createUser(data: userCreateDataType): Promise<UserType> {
  try {
    const user = await prisma.$queryRaw<UserType>`
      INSERT INTO "User"("id", "firstName", "lastName", "email", "netId", "modifiedAt")
      VALUES (gen_random_uuid (), ${data.firstName}, ${data.lastName}, ${data.email}, ${data.netId}, null)
      RETURNING *`;
    return user;
  } catch (err: any) {
    throw Error(err.message);
  }
}


async function updateUser(where: userUpdateWhereType, data: userUpdateDataType): Promise<UserType> {
  try {
    const user = await prisma.$queryRaw<UserType>`
      UPDATE "User" 
      SET "firstName" = ${data.firstName}, "lastName" = ${data.lastName}, "email" = ${data.email}, "netId" = ${data.netId}
      WHERE id = ${where.id}::uuid
      RETURNING *
    `;
    return user;
  } catch (err: any) {
    throw Error(err.message);
  }
}

export default {
  getUsers,
  getUserById,
  createUser,
  updateUser,
};
