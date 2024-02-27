import prisma from "@/lib/prisma";
import { hashPassword } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  const password = await hashPassword(data.password);

  return await prisma.company
    .create({
      data: {
        name: data.name,
        email: data.email,
        password: password,
      },
    })
    .then((company) => {
      console.log(company);

      return NextResponse.json(company);
    })
    .catch((error) => {
      return NextResponse.json(error, { status: 500 });
    });
}
