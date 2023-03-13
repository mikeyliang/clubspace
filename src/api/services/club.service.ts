import prisma from "../prisma/client";
import { ClubType, clubGetWhereType, clubUpdateWhereType, clubCreateDataType, clubUpdateDataType } from '../models/club.model'

async function getClubs() {
  try {
    const clubs = await prisma.$queryRaw`SELECT * FROM "Club"`;
    return clubs;
  } catch (err: any) {
    throw Error(err.message);
  }
}

async function getClubById(where: clubGetWhereType) {
  try {
    const club =
      await prisma.$queryRaw<ClubType>`SELECT * FROM "Club" WHERE id = ${where.id}::uuid`;
    return club;
  } catch (err: any) {
    throw Error(err.message);
  }
}

async function createClub(data: clubCreateDataType): Promise<ClubType> {
  try {
    const club = await prisma.$queryRaw<ClubType>`
      INSERT INTO "Club"("id", "description", "email", "location", "college", "website", "modifiedAt")
      VALUES (gen_random_uuid (), ${data.description}, ${data.email}, ${data.location}, ${data.college}, ${data.website}, null)
      RETURNING *`;
    return club;
  } catch (err: any) {
    throw Error(err.message);
  }
}

async function updateClub(where: clubUpdateWhereType, data: clubUpdateDataType): Promise<ClubType> {
  try {
    const club = await prisma.$queryRaw<ClubType>`
    UPDATE "Club" 
    SET "description" = ${data.description}, "email" = ${data.email}, "location" = ${data.location}, "college" = ${data.college}, "website" = ${data.website}
    WHERE id = ${where.id}::uuid
    RETURNING *
  `;
    return club;
  } catch (err: any) {
    throw Error(err.message);
  }
}

export default {
  getClubs,
  getClubById,
  createClub,
  updateClub,
};