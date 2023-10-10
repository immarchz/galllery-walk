import { NextResponse } from "next/server";
import { authOptions } from "../../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const data = await req.json();
  data.user = {
    connect: {
      id: data.user_id,
    },
  };
  data.comment = {
    connect: {
      id: data.comment_id,
    },
  };
  delete data.user_id;
  delete data.comment_id;

  console.log(data);

  const like = await prisma.like.create({
    data,
  });

  return NextResponse.json(like);
}

export async function DELETE(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const data = await req.json();

  await prisma.like.deleteMany({
    where: {
      commentId: {
        equals: data.comment_id,
      },
      userId: {
        equals: data.user_id,
      },
    },
  });

  return NextResponse.json({ success: true });
}
