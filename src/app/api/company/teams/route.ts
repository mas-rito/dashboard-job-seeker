import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  const result = await prisma.companyTeam.create({
    data,
  });
  return NextResponse.json(result);
}
