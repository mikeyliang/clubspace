import { NextRequest, NextResponse } from "next/server";
import prisma from "../client";

export async function GET() {
  const data = await prisma.$queryRaw`SELECT * FROM "User"`;
  return NextResponse.json(data);
}
