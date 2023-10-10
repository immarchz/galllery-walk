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
      id: data.project_id,
    },
  };
  data.user = {
    connect: {
      id: data.user_id,
    },
  };
  delete data.project_id;
  delete data.user_id;

  const comment = await prisma.comment.create({
    data,
  });

  return NextResponse.json(comment);
}

export async function DELETE(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const data = await req.json();
  data.project = {
    connect: {
      id: data.project_id,
    },
  };
  data.user = {
    connect: {
      id: data.user_id,
    },
  };
  delete data.project_id;
  delete data.user_id;

  const comment = await prisma.comment.create({
    data,
  });

  return NextResponse.json(comment);
}
