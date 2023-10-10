import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ProjectForm from "@/components/Form/ProjectForm";
import { prisma } from "@/lib/prisma";

import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default async function CreateProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  const currentUserEmail = session?.user?.email!;
  const user = await prisma.user.findUnique({
    where: {
      email: currentUserEmail,
    },
  });

  return (
    <div>
      CreateProjectPage
      <ProjectForm user={user!} event_id={params.slug} project={null} create />
      <ToastContainer />
    </div>
  );
}
