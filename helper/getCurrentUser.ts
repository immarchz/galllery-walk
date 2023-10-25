import { prisma } from "@/lib/prisma";
import { Session } from "next-auth";

export async function getServerSideUser(session: Session | null) {
  if (!session) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session!.user?.email!,
    },
    include: {
      projectPermission: true,
      eventPermission: true,
      eventCRUD: true,
    },
  });
  return user;
}
