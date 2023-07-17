"use client";
import Link from "next/link";
import Image from "next/image";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import MailIcon from "@mui/icons-material/Mail";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useSession } from "next-auth/react";

interface eventInterface {
  img: string;
  description: string;
  eventName: string;
  time: string;
  info: string;
  contact: string;
}

const eventArr: eventInterface[] = [
  {
    img: "/singleImageTest.svg",
    description:
      "ISEKAI คือ นิทรรศการเดี่ยวครั้งแรกของ Guong (กวง) - ณภพ เชาวนพูนผล บอกเล่าเกี่ยวกับ สาเหตุแห่งความนิยมมากล้น ที่มีต่อการ์ตูนแนวต่างโลก หรือ TEST TEST TESTTESTTESTTEST TEST TEST TESTTESTTESTTESTTEST TEST TESTTESTTESTTEST",
    eventName: '"ISEKAI"',
    time: "Monday, November 27 · 5:00 pm - 9:30 pm",
    info: "นิทรรศการจะถ่ายทอดแนวคิดทั้งหมดนี้ ผ่านสิ่งที่ character สุดน่ารักอย่าง Erite และ Cooley ได้พบเจอ ซึ่งหากสังเกตดี ๆ ผู้ชมจะพบสัญลักษณ์ประจำตัวของศิลปิน แทรกอยู่ในทุกผลงาน นั่นก็คือ ดวงตาที่มีลักษณะคล้าย “embryo” (ตัวอ่อนระยะแรกของสิ่งมีชีวิตหลายเซลล์) สื่อความหมายถึง สายตาอันไร้เดียงสา และความคิดที่เป็นอิสระของเหล่าเด็ก ๆ นั่นเอง",
    contact: "089-111-1111",
  },
];

export default function EventsList() {
  const { data: session } = useSession();
  const eventInfo = eventArr;

  if (session && session?.user) {
    return (
      <div className="flex min-h-screen bg-cover bg-black text-white">
        <div className="flex w-full justify-center px-10">
          {eventInfo.map((event: eventInterface, index: number) => (
            <div
              key={index}
              className="flex flex-col w-full items-center text-white "
            >
              <div className="w-full flex justify-center">
                <Image
                  src={event.img}
                  alt="Event Pic"
                  width={1062}
                  height={316}
                />
              </div>
              <div className="flex flex-col w-1/2">
                <h1 className="mt-5 xl:text-[20px]">{event.eventName}</h1>
                <p className="text-ellipsis">{event.description}</p>
              </div>
              <div className="flex flex-row w-1/2 py-10">
                <CalendarTodayIcon />
                <p className="flex flex-wrap pl-4">Date & Time</p>
              </div>
              <div className="flex w-1/2">
                <p>{event.time}</p>
              </div>

              <div className="flex flex-row w-1/2 py-10">
                <StickyNote2Icon />
                <p className="flex flex-wrap pl-4">About This Event</p>
              </div>
              <div className="flex w-1/2">
                <p>{event.info}</p>
              </div>

              <div className="flex flex-row w-1/2 py-10">
                <MailIcon />
                <p className="flex flex-wrap pl-4">Contact</p>
              </div>
              <div className="flex w-1/2">
                <p>{event.contact}</p>
              </div>

              <Stack className="py-10" direction="row" spacing={10}>
                <Button
                  className="bg-white text-black hover:bg-white"
                  variant="contained"
                >
                  Join as Guest
                </Button>

                <Link href="/createForm">
                  <Button
                    className="bg-white text-black hover:bg-white"
                    variant="contained"
                  >
                    Create project
                  </Button>
                </Link>
              </Stack>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="flex min-h-screen bg-cover bg-black text-white">
      <div className="flex w-full justify-center px-10">
        {eventInfo.map((event: eventInterface, index: number) => (
          <div
            key={index}
            className="flex flex-col w-full items-center text-white "
          >
            <div className="w-full flex justify-center">
              <Image
                src={event.img}
                alt="Event Pic"
                width={1062}
                height={316}
              />
            </div>
            <div className="flex flex-col w-1/2">
              <h1 className="mt-5 xl:text-[20px]">{event.eventName}</h1>
              <p className="text-ellipsis">{event.description}</p>
            </div>
            <div className="flex flex-row w-1/2 py-10">
              <CalendarTodayIcon />
              <p className="flex flex-wrap pl-4">Date & Time</p>
            </div>
            <div className="flex w-1/2">
              <p>{event.time}</p>
            </div>

            <div className="flex flex-row w-1/2 py-10">
              <StickyNote2Icon />
              <p className="flex flex-wrap pl-4">About This Event</p>
            </div>
            <div className="flex w-1/2">
              <p>{event.info}</p>
            </div>

            <div className="flex flex-row w-1/2 py-10">
              <MailIcon />
              <p className="flex flex-wrap pl-4">Contact</p>
            </div>
            <div className="flex w-1/2">
              <p>{event.contact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
