import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.redirect("/");
  }

  const events = await prisma.event.findMany();

  return NextResponse.json(events);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const data = await req.json();
  data.event_start = new Date(data.event_start);
  data.event_end = new Date(data.event_end);
  data.money = parseInt(data.money);
  data.user = {
    connect: {
      id: data.user_id,
    },
  };
  delete data.user_id;

  const event = await prisma.event.create({
    data,
  });

  return NextResponse.json(event);
}

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const data = await req.json();
  data.event_start = new Date(data.event_start);
  data.event_end = new Date(data.event_end);
  data.money = parseInt(data.money);
  data.user = {
    connect: {
      id: data.user_id,
    },
  };
  const id = data.id;
  delete data.user_id;
  delete data.id;

  try {
    const event = await prisma.event.update({
      where: {
        id,
      },
      data,
    });
    return NextResponse.json(event);
  } catch (e) {
    console.log(e);
    return NextResponse.json(e);
  }
}
