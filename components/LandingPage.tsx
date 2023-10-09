import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Col, Row } from "antd";
import { prisma } from "@/lib/prisma";
import { Event } from "@prisma/client";
import { AppTime } from "@/helper/time";

export default async function LandingPage() {
  //   const showevents = maineventsArr;
  //   const events = eventArr;
  const events = await prisma.event.findMany();
  const showevents = events.slice(0, 3);

  return (
    <div className="bg-black ">
      <Row gutter={[24, 24]} justify="center">
        <Col>
          {showevents.map((event: Event, index: number) => (
            <div key={index} className="flex text-white items-center">
              <Link href={`event/${event.id}`}>
                <Image
                  src={event.display_image}
                  alt="Event Pic"
                  width={800}
                  height={800}
                />
              </Link>
            </div>
          ))}
        </Col>
      </Row>
      <Row className="text-white my-10 mx-20">
        <Col
          xl={{ span: 8 }}
          xs={{ span: 24 }}
          style={{ textAlign: "start" }}
          className="text-xl text-white"
        >
          Current Event
        </Col>
        <Row gutter={[24, 24]} justify="center" className="text-white my-10 ">
          {events.map((event: Event, index: number) => (
            <Col key={index}>
              <Row justify={"center"}>
                <Link href={`event/${event.id}`}>
                  <Image
                    src={event.display_image}
                    alt="Event Pic"
                    width={500}
                    height={400}
                  />
                </Link>
              </Row>
              <p className="mt-5 xl:text-[20px]">{event.title}</p>
              <p className="text-stone-400">
                {AppTime(event.event_start, event.event_end)}
              </p>
              <p className="text-stone-400">{event.organizer}</p>
              <p className="text-stone-400">{event.money} Baht</p>
            </Col>
          ))}
        </Row>
      </Row>
    </div>
  );
}

// const LandingPage = () => {

// };

// export default LandingPage;
