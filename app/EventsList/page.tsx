"use client";
import Link from "next/link";
import Image from "next/image";
import { Divider, Button, Row, Col } from "antd";
import * as React from "react";
import { TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
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

    eventName: "XSPACE ART HALL V.2 – ENLIVEN",
    time: "Sun, Dec 12, 12:00 PM",
    location: "Xspace Gallery",
  },
  {
    linkTo: "/SingleEvent",
    img: "/ghibil.svg",

    eventName: "The World of Studio Ghibli’s Animation Central World",
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
];

export default function EventsList() {
  const currentEvent = eventArr;
  const incommingEvent = eventArr2;
  const completeEvent = eventArr3;

  const { data: session } = useSession();

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  if (session && session?.user) {
    return (
      <div className="text-white">
        <Row className="mb-10" justify={"center"}>
          Current Events
        </Row>
        <Row gutter={[24, 24]} justify={"center"}>
          {currentEvent.map(
            (event: currentEventListInterface, index: number) => (
              <div key={index} className="flex-1">
                <Row gutter={[32, 32]}>
                  <Col span={12}>
                    <Link href={event.linkTo}>
                      <Image src={event.img} alt="" width={291} height={194} />
                    </Link>
                  </Col>

                  <Col span={12}>
                    <Row gutter={[24, 24]}>
                      <Col span={20}>{event.eventName}</Col>
                      <Col span={20}>{event.time}</Col>
                      <Col span={20}>{event.location}</Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            )
          )}
          {currentEvent.length % 2 === 1 ? (
            <div className="flex-1"></div>
          ) : null}
        </Row>
        <Row justify={"center"}>
          <Col span={22}>
            <Divider className=" h-4  border-white" />
          </Col>
        </Row>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-black text-white">
      <div className="flex flex-col overflow-hidden ">
        <h1 className="text-xl"> Current Event </h1>
        <div className="flex flex-col md:flex-row">
          {currentEvent.map(
            (event: currentEventListInterface, index: number) => (
              <div
                key={index}
                className="w-full md:w-1/2 px-10  text-white mt-5"
              >
                <div className="flex flex-wrap  ">
                  <Link href={event.linkTo}>
                    <Image src={event.img} alt="" width={291} height={194} />
                  </Link>
                  <div className="flex flex-col ml-5">
                    <h1 className="text-[20px]">{event.eventName}</h1>
                    <p className="text-[15px]">{event.time}</p>

                    <p>{event.location}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <Divider className="my-4 h-4  border-white" variant="middle" />

        <h1 className="text-xl">Incomming</h1>
        <div className="flex flex-col md:flex-row">
          {incommingEvent.map(
            (event: incommingEventListInterface, index: number) => (
              <div key={index} className="w-1/2 px-10  text-white mt-5">
                <div className="flex flex-wrap  ">
                  <Link href={event.linkTo}>
                    <Image src={event.img} alt="" width={291} height={194} />
                  </Link>
                  <div className="flex flex-col ml-5 w-1/2">
                    <h1 className="text-[20px]">{event.eventName}</h1>
                    <p className="text-[15px]">{event.time}</p>

                    <p>{event.location}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <Divider className="my-4 h-4  border-white" variant="middle" />

        <h1 className="text-xl">Complete</h1>
        <div className="flex flex-col md:flex-row flex-wrap">
          {completeEvent.map(
            (event: completeEventListInterface, index: number) => (
              <div key={index} className="w-1/2 px-10 text-white mt-5">
                <div className="flex flex-wrap">
                  <Link href={event.linkTo}>
                    <Image src={event.img} alt="" width={291} height={194} />
                  </Link>
                  <div className="flex flex-col ml-5 w-1/2">
                    <h1 className="text-[20px]">{event.eventName}</h1>
                    <p className="text-[15px]">{event.time}</p>

                    <p>{event.location}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
