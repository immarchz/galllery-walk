import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.redirect("/");
  }

  //   const project = await prisma.event.findFirst();

  //   return NextResponse.json(events);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const data = await req.json();
  data.money = 0;
  data.event = {
    connect: {
      id: data.event_id,
    },
  };
  data.user = {
    connect: {
      id: data.user_id,
    },
  };
  delete data.event_id;
  delete data.user_id;

  const project = await prisma.project.create({
    data,
  });

  return NextResponse.json(project);
}

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const data = await req.json();
  const id = data.id;
  delete data.id;

  const project = await prisma.project.update({
    where: {
      id,
    },
    data,
  });

  return NextResponse.json(project);
}
