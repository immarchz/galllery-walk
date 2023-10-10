import Link from "next/link";
import Image from "next/image";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import MailIcon from "@mui/icons-material/Mail";
import { Button, Card, Col, List, Row } from "antd";
import Stack from "@mui/material/Stack";
import { prisma } from "@/lib/prisma";
import { AppTime } from "@/helper/time";
import QrCode from "@/components/QrCode";
import JoinEventButton from "@/components/Button/JoinEventButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Event } from "@prisma/client";
import Meta from "antd/es/card/Meta";
import ProjectRender from "@/components/ProjectRender";

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
    include: {
      projects: true,
    },
  });

  if (!event) {
    return (
      <div className="flex min-h-screen bg-cover bg-black text-white">
        <span>Sorry event not found</span>
      </div>
    );
  }

  const session = await getServerSession(authOptions);
  const user = await prisma.user.findFirst({
    where: {
      email: session?.user?.email ?? "",
    },
  });

  const isUserJoinEvent = user ? event.participants.includes(user.id) : false;

  return (
    <div className="flex min-h-screen bg-cover bg-black text-white">
      <div className="flex w-full justify-center px-10">
        <div className="flex flex-col w-full items-center text-white">
          {body(event, isUserJoinEvent)}
          <Stack className="py-10" direction="row" spacing={10}>
            <JoinEventButton user={user} event={event} />
            <Link href={`/event/${params.slug}/create`}>
              <Button className="bg-white text-black hover:bg-white">
                Create project
              </Button>
            </Link>
          </Stack>
        </div>
      </div>
    </div>
  );

  function body(event: any, isUserJoinEvent: boolean) {
    if (isUserJoinEvent) {
      return (
        <div className="text-white mx-10">
          <div>
            <Row gutter={[8, 8]} justify={"center"}>
              <Col>
                <Row justify={"center"} className="mt-5 mb-3">
                  <Col
                    xl={{ span: 16 }}
                    xs={{ span: 24 }}
                    className="xl:text-xl sm:text-lg "
                  >
                    {event.title}
                  </Col>
                </Row>
                <Row justify={"center"}>
                  <Col xl={{ span: 12 }} sm={{ span: 20 }} xs={{ span: 24 }}>
                    <Image
                      src={event.display_image}
                      alt="Event Pic"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Col>
                </Row>

                <Row justify={"center"} className="mt-5 mb-3">
                  <Col
                    xl={{ span: 16 }}
                    xs={{ span: 24 }}
                    className="xl:text-xl sm:text-lg "
                  >
                    Projects
                  </Col>
                </Row>
                <Row justify={"center"}>
                  {event.projects.length > 0 ? (
                    <ProjectRender projects={event.projects} />
                  ) : (
                    <div>we dont have project now</div>
                  )}
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      );
    } else
      return (
        <>
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
          <div className="flex w-1/2">
            <QrCode value={`event/${params.slug}`} />
          </div>
        </>
      );
  }
}
