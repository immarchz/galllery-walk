import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const data = await req.json();
  data.project = {
    connect: {
      id: data.id,
    },
  };
  data.user = {
    connect: {
      id: data.user_id,
    },
  };
  data.amount = parseInt(data.amount);

  delete data.id;
  delete data.user_id;

  const transaction = await prisma.transaction.create({
    data,
  });

  return NextResponse.json(transaction);
}
