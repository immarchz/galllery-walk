import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import EventForm from "@/components/EventForm";
import { prisma } from "@/lib/prisma";

import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default async function EditEventPage({
  params,
}: {
  params: { slug: string };
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  const event = await prisma.event.findFirst({
    where: {
      id: {
        equals: params.slug,
      },
    },
  });

  const currentUserEmail = session?.user?.email!;
  const user = await prisma.user.findUnique({
    where: {
      email: currentUserEmail,
    },
  });

  return (
    <div>
      EditEventPage
      <EventForm user={user!} event={event} />
      <ToastContainer />
    </div>
  );
}
