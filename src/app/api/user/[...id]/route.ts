import { NextRequest, NextResponse } from "next/server";
import prisma from "../../client";
import { Prisma } from "@prisma/client";

type UserIdParam = {
  id: string;
};

export async function GET(
  req: NextRequest,
  { params }: { params: UserIdParam }
) {
  const query = `SELECT * FROM "User" WHERE id = '${params.id}'`;
  const data = await prisma.$queryRaw(Prisma.raw(query));
  return NextResponse.json(data);
}
