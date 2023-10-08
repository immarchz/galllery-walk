"use client";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { Event, User } from "@prisma/client";
import { useSession } from "next-auth/react";
import React from "react";

export default function JoinEventButton({
  event,
  user,
}: {
  event: Event;
  user: User;
}) {
  async function joinEvent() {
    const data = {
      participants: [...event.participants, user.id],
    };
    await prisma.event.update({
      where: {
        id: event.id,
      },
      data,
    });
    alert();
  }
  async function disJoinEvent() {
    const data = {
      participants: event.participants.filter((p) => p !== user.id),
    };
    await prisma.event.update({
      where: {
        id: event.id,
      },
      data,
    });
  }

  if (event.participants.includes(user.id)) {
    return <button onClick={disJoinEvent}>disjoin</button>;
  } else {
    return <button onClick={joinEvent}>join</button>;
  }
}
