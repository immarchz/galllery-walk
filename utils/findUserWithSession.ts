import { prisma } from "@/lib/prisma";
import { Session } from "next-auth";

export async function findUserWithSession(session: Session) {
  const currentUserEmail = session?.user?.email!;
  const user = await prisma.user.findUnique({
    where: {
      email: currentUserEmail,
    },
  });
  return user;
}
