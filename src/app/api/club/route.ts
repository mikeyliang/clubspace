import { NextRequest } from "next/server";
import prisma from "../client";

export async function GET(req: NextRequest) {
  prisma.$queryRaw`SELECT * FROM club`;
  return;
}
