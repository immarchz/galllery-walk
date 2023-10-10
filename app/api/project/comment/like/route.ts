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
      id: data.commentId,
    },
  };
  delete data.user_id;
  delete data.commentId;

  const like = await prisma.like.create({
    data,
  });

  return NextResponse.json(like);
}
