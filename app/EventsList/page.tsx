"use client";
import Link from "next/link";
import Image from "next/image";
import { Divider, Button, Row, Col } from "antd";
import * as React from "react";

import { useSession } from "next-auth/react";

interface currentEventListInterface {
  linkTo: string;
  img: string;
  eventName: string;
  time: string;
  location: string;
}

interface incommingEventListInterface {
  linkTo: string;
  img: string;
  eventName: string;
  time: string;
  location: string;
}

interface completeEventListInterface {
  linkTo: string;
  img: string;
  eventName: string;
  time: string;
  location: string;
}

const eventArr: currentEventListInterface[] = [
  {
    linkTo: "/SingleEvent",
    img: "/ISEKAI.svg",
    eventName: '"ISEKAI"',
    time: "Mon, Jul 20, 7:00 PM",
    location: "Live Nation Tero",
  },
  {
    linkTo: "/SingleEvent",
    img: "/ISEKAI.svg",
    eventName: '"ISEKAI"',
    time: "Mon, Jul 20, 7:00 PM",
    location: "Live Nation Tero",
  },
  {
    linkTo: "/SingleEvent",
    img: "/ISEKAI.svg",
    eventName: '"ISEKAI"',
    time: "Mon, Jul 20, 7:00 PM",
    location: "Live Nation Tero",
  },
];

const eventArr2: incommingEventListInterface[] = [
  {
    linkTo: "/SingleEvent",
    img: "/xpace.svg",

    eventName: "XSPACE ART HALL V.2 – 231231232 ",
    time: "Sun, Dec 12, 12:00 PM",
    location: "Xspace Gallery",
  },
  {
    linkTo: "/SingleEvent",
    img: "/ghibil.svg",

    eventName: "The World of Studio Ghibli’s",
    time: "Sat, Dec 23, 7:00 PM",
    location: "Teayii Arts Work",
  },
  {
    linkTo: "/SingleEvent",
    img: "/ghibil.svg",

    eventName: "The World of Studio Ghibli’s",
    time: "Sat, Dec 23, 7:00 PM",
    location: "Teayii Arts Work",
  },
];

const eventArr3: completeEventListInterface[] = [
  {
    linkTo: "/SingleEvent",
    img: "/futurepark.svg",

    eventName: "FUTURE PARK & ZPELL X BENZILLA",
    time: "Sun, Jan 22, 9:00 PM",
    location: "Benzilla",
  },
  {
    linkTo: "/SingleEvent",
    img: "/whitelephant.svg",

    eventName:
      'The 12th White Elephant Art Fair under the theme "Love the World"',
    time: "Sat, Jan 16, 8:00 PM",
    location: "Charan Panonta",
  },
  {
    linkTo: "/SingleEvent",
    img: "/whitelephant.svg",

    eventName:
      'The 12th White Elephant Art Fair under the theme "Love the World"',
    time: "Sat, Jan 16, 8:00 PM",
    location: "Charan Panonta",
  },
  {
    linkTo: "/SingleEvent",
    img: "/whitelephant.svg",

    eventName:
      'The 12th White Elephant Art Fair under the theme "Love the World"',
    time: "Sat, Jan 16, 8:00 PM",
    location: "Charan Panonta",
  },
];

export default function EventsList() {
  const currentEvent = eventArr;
  const incommingEvent = eventArr2;
  const completeEvent = eventArr3;

  const { data: session } = useSession();

  if (session && session?.user) {
    return (
      <div className="text-white mx-10">
        <Row className="mb-10 text-xl" justify={"center"}>
          Current Events
        </Row>
        <Row gutter={[24, 24]} justify={"center"}>
          <Row gutter={[24, 24]} justify={"start"}>
            {currentEvent.map(
              (event: currentEventListInterface, index: number) => (
                <>
                  <Col span={12}>
                    <Row style={{ width: "50" }}>
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
        </Row>

        <Row className="mb-10 text-xl" justify={"center"}>
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
        </Row>

        <Row className="mb-10 text-xl" justify={"center"}>
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
          <Row justify={"center"} className="my-16">
            <Link href="/event/create">
              <Button className=" bg-white">Create Event</Button>
            </Link>
          </Row>
        </Row>
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
          {currentEvent.map(
            (event: currentEventListInterface, index: number) => (
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
      </Row>

      <Row className="mb-10 text-xl" justify={"center"}>
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
      </Row>

      <Row className="mb-10 text-xl" justify={"center"}>
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
      </Row>
    </div>
  );
}
