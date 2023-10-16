import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ProjectForm from "@/components/Form/ProjectForm";
import { prisma } from "@/lib/prisma";
import { checkServerSession } from "@/utils/checkServerSession";
import { findUserWithSession } from "@/utils/findUserWithSession";

import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default async function EditProjectPage({
  params,
}: {
  params: { slug: string; project: string };
}) {
  const session = await checkServerSession();
  const user = await findUserWithSession(session);

  const projectx = await prisma.project.findFirst({
    where: {
      id: {
        equals: params.project,
      },
    },
  });

  return (
    <div>
      EditProjectPage
      <ProjectForm user={user!} event_id={params.slug} project={projectx} />
      <ToastContainer />
    </div>
  );
}
