import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  //   const session = await getServerSession(authOptions);
  //   if (!session) {
  //     return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  //   }

  const data = await req.json();
  data.user = {
    connect: {
      id: data.user_id,
    },
  };

  const av = await prisma.eventCRUD.findFirst({
    where: {
      userId: data.user_id,
    },
  });

  if (av) {
    return NextResponse.json(av);
  } else {
    delete data.user_id;

    const transaction = await prisma.eventCRUD.create({
      data,
    });

    return NextResponse.json(transaction);
  }
}
