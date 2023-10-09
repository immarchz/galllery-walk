import Link from "next/link";
import Image from "next/image";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import MailIcon from "@mui/icons-material/Mail";
import { Button } from "antd";
import Stack from "@mui/material/Stack";
import { prisma } from "@/lib/prisma";
import { AppTime } from "@/helper/time";

export default async function EventPage({
  params,
}: {
  params: { slug: string };
}) {
  const event = await prisma.event.findFirst({
    where: {
      id: {
        equals: params.slug,
      },
    },
  });

  if (!event) {
    return (
      <div className="flex min-h-screen bg-cover bg-black text-white">
        <span>Sorry event not found</span>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-cover bg-black text-white">
      <div className="flex w-full justify-center px-10">
        <div className="flex flex-col w-full items-center text-white">
          <div className="w-full flex justify-center">
            <Image
              src={event.display_image}
              alt="Event Pic"
              width={1062}
              height={316}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <h1 className="mt-5 xl:text-[20px]">{event.title}</h1>
            <p className="text-ellipsis">{event.description}</p>
          </div>
          <div className="flex flex-row w-1/2 py-10">
            <CalendarTodayIcon />
            <p className="flex flex-wrap pl-4">Date & Time</p>
          </div>
          <div className="flex w-1/2">
            <p>{AppTime(event.event_start, event.event_end)}</p>
          </div>

          <div className="flex flex-row w-1/2 py-10">
            <StickyNote2Icon />
            <p className="flex flex-wrap pl-4">About This Event</p>
          </div>
          <div className="flex w-1/2">
            <p>{event.description}</p>
          </div>

          <div className="flex flex-row w-1/2 py-10">
            <MailIcon />
            <p className="flex flex-wrap pl-4">Contact</p>
          </div>
          <div className="flex w-1/2">
            <p>{event.organizer}</p>
          </div>

          <Stack className="py-10" direction="row" spacing={10}>
            <Link href="ProjectList">
              <Button className="bg-white text-black hover:bg-white">
                Join as Guest
              </Button>
            </Link>

            <Link href="/createForm">
              <Button className="bg-white text-black hover:bg-white">
                Create project
              </Button>
            </Link>
          </Stack>
        </div>
      </div>
    </div>
  );
}
