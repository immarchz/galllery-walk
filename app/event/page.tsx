import Link from "next/link";
import Image from "next/image";
import { Divider, Button, Row, Col } from "antd";
import * as React from "react";

import { Event } from "@prisma/client";
import { getServerSession } from "next-auth";
import { AppTime } from "@/helper/time";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { getServerSideUser } from "@/helper/getCurrentUser";

async function getEvents() {
  const events = await (
    await fetch("http://localhost:3000/api/event", {
      cache: "no-cache",
    })
  ).json();

  return events;
}

export default async function EventPage() {
  const session = await getServerSession(authOptions);
  const user = await getServerSideUser(session);

  const events = await getEvents();

  if (session && session?.user) {
    return (
      <div className="text-white mx-10">
        <Row className="mb-10 text-xl" justify={"center"}>
          Current Events
        </Row>
        <Row gutter={[24, 24]} justify={"center"}>
          <Row gutter={[24, 24]} justify={"start"}>
            {events.map((event: Event, index: number) => (
              <>
                <Col span={12}>
                  <Row style={{ width: "50" }} justify={"center"}>
                    <Col>
                      <Link
                        href={`${process.env.NEXT_PUBLIC_BASE_URL}/event/${event.id}`}
                      >
                        <Image
                          src={event.display_image}
                          alt=""
                          width={300}
                          height={200}
                        />
                      </Link>
                    </Col>
                    <Col
                      className="mx-3 text-ellipsis overflow-hidden"
                      style={{ width: 250 }}
                    >
                      <Row gutter={[24, 24]}>
                        <Col className="text-xl">{event.title}</Col>
                      </Row>
                      <Row gutter={[24, 24]}>
                        <Col>{AppTime(event.event_start, event.event_end)}</Col>
                      </Row>
                      <Row gutter={[24, 24]}>
                        <Col className="mt-5">{event.organizer}</Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </>
            ))}
          </Row>
        </Row>
        <Row justify={"center"}>
          <Col span={22}>
            <Divider className=" h-4  border-white" />
          </Col>
        </Row>

        {/* <Row className="mb-10 text-xl" justify={"center"}>
          Incoming Events
        </Row>
        <Row gutter={[24, 24]} justify={"center"}>
          <Row gutter={[24, 24]} justify={"start"}>
            {incommingEvent.map(
              (event: incommingEventListInterface, index: number) => (
                <>
                  <Col span={12}>
                    <Row justify={"center"}>
                      <Col>
                        <Link href={event.linkTo}>
                          <Image
                            src={event.img}
                            alt=""
                            width={300}
                            height={200}
                          />
                        </Link>
                      </Col>
                      <Col
                        className="mx-3 text-ellipsis overflow-hidden"
                        style={{ width: 250 }}
                      >
                        <Row gutter={[24, 24]}>
                          <Col className="text-xl">{event.eventName}</Col>
                        </Row>
                        <Row gutter={[24, 24]}>
                          <Col>{event.time}</Col>
                        </Row>
                        <Row gutter={[24, 24]}>
                          <Col className="mt-5">{event.location}</Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </>
              )
            )}
          </Row>
        </Row>
        <Row justify={"center"}>
          <Col span={22}>
            <Divider className=" h-4  border-white" />
          </Col>
        </Row> */}

        {/* <Row className="mb-10 text-xl" justify={"center"}>
          Completed Events
        </Row>
        <Row gutter={[24, 24]} justify={"center"}>
          <Row gutter={[24, 24]} justify={"start"}>
            {completeEvent.map(
              (event: completeEventListInterface, index: number) => (
                <>
                  <Col span={12}>
                    <Row justify={"center"}>
                      <Col>
                        <Link href={event.linkTo}>
                          <Image
                            src={event.img}
                            alt=""
                            width={300}
                            height={200}
                          />
                        </Link>
                      </Col>
                      <Col
                        className="mx-3 text-ellipsis overflow-hidden"
                        style={{ width: 250 }}
                      >
                        <Row gutter={[24, 24]}>
                          <Col className="text-xl">{event.eventName}</Col>
                        </Row>
                        <Row gutter={[24, 24]}>
                          <Col>{event.time}</Col>
                        </Row>
                        <Row gutter={[24, 24]}>
                          <Col className="mt-5">{event.location}</Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </>
              )
            )}
          </Row> 
          
        </Row>*/}
        {user ? (
          user.eventCRUD.length > 0 ? (
            <Row justify={"center"} className="my-10">
              <Link href="/event/create">
                <Button className=" bg-white">Create Event</Button>
              </Link>
            </Row>
          ) : null
        ) : null}
      </div>
    );
  }
  return (
    <div className="text-white mx-10">
      <Row className="mb-10 text-xl" justify={"center"}>
        Current Events
      </Row>
      <Row gutter={[24, 24]} justify={"center"}>
        <Row gutter={[24, 24]} justify={"start"}>
          {events.map((event: Event, index: number) => (
            <>
              <Col span={12}>
                <Row>
                  <Col>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_BASE_URL}/event/${event.id}`}
                    >
                      <Image
                        src={event.display_image}
                        alt=""
                        width={300}
                        height={200}
                      />
                    </Link>
                  </Col>
                  <Col
                    className="mx-3 text-ellipsis overflow-hidden"
                    style={{ width: 250 }}
                  >
                    <Row gutter={[24, 24]}>
                      <Col className="text-xl">{event.title}</Col>
                    </Row>
                    <Row gutter={[24, 24]}>
                      <Col>{AppTime(event.event_start, event.event_end)}</Col>
                    </Row>
                    <Row gutter={[24, 24]}>
                      <Col className="mt-5">{event.organizer}</Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </>
          ))}
        </Row>
      </Row>
      <Row justify={"center"}>
        <Col span={22}>
          <Divider className=" h-4  border-white" />
        </Col>
      </Row>

      {/* <Row className="mb-10 text-xl" justify={"center"}>
        Incoming Events
      </Row>
      <Row gutter={[24, 24]} justify={"center"}>
        <Row gutter={[24, 24]} justify={"start"}>
          {incommingEvent.map(
            (event: incommingEventListInterface, index: number) => (
              <>
                <Col span={12}>
                  <Row>
                    <Col>
                      <Link href={event.linkTo}>
                        <Image
                          src={event.img}
                          alt=""
                          width={300}
                          height={200}
                        />
                      </Link>
                    </Col>
                    <Col
                      className="mx-3 text-ellipsis overflow-hidden"
                      style={{ width: 250 }}
                    >
                      <Row gutter={[24, 24]}>
                        <Col className="text-xl">{event.eventName}</Col>
                      </Row>
                      <Row gutter={[24, 24]}>
                        <Col>{event.time}</Col>
                      </Row>
                      <Row gutter={[24, 24]}>
                        <Col className="mt-5">{event.location}</Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </>
            )
          )}
        </Row>
      </Row>
      <Row justify={"center"}>
        <Col span={22}>
          <Divider className=" h-4  border-white" />
        </Col>
      </Row> */}

      {/* <Row className="mb-10 text-xl" justify={"center"}>
        Completed Events
      </Row>
      <Row gutter={[24, 24]} justify={"center"}>
        <Row gutter={[24, 24]} justify={"start"}>
          {completeEvent.map(
            (event: completeEventListInterface, index: number) => (
              <>
                <Col span={12}>
                  <Row>
                    <Col>
                      <Link href={event.linkTo}>
                        <Image
                          src={event.img}
                          alt=""
                          width={300}
                          height={200}
                        />
                      </Link>
                    </Col>
                    <Col
                      className="mx-3 text-ellipsis overflow-hidden"
                      style={{ width: 300 }}
                    >
                      <Row gutter={[24, 24]}>
                        <Col className="text-xl">{event.eventName}</Col>
                      </Row>
                      <Row gutter={[24, 24]}>
                        <Col>{event.time}</Col>
                      </Row>
                      <Row gutter={[24, 24]}>
                        <Col className="mt-5">{event.location}</Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </>
            )
          )}
        </Row> 
      </Row>*/}
    </div>
  );
}
