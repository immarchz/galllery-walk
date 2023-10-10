import EventForm from "@/components/Form/EventForm";
import { prisma } from "@/lib/prisma";
import { checkServerSession } from "@/utils/checkServerSession";
import { findUserWithSession } from "@/utils/findUserWithSession";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default async function EditEventPage({
  params,
}: {
  params: { slug: string };
}) {
  const session = await checkServerSession();
  const user = await findUserWithSession(session);

  const event = await prisma.event.findFirst({
    where: {
      id: {
        equals: params.slug,
      },
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
