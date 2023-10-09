import Image from "next/image";
import Link from "next/link";

import { Col, Row, Carousel } from "antd";
import { prisma } from "@/lib/prisma";
import { Event } from "@prisma/client";
import { AppTime } from "@/helper/time";

const contentStyle: React.CSSProperties = {
  height: "500px",
  color: "#fff",
  lineHeight: "160px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default async function LandingPage() {
  //   const showevents = maineventsArr;
  //   const events = eventArr;
  const events = await prisma.event.findMany();
  const showevents = events.slice(0, 3);

  return (
    <div className="bg-black ">
      <Row gutter={[24, 24]} justify="center">
        <Col xl={{ span: 12 }} className="">
          <Carousel autoplay slidesToShow={1}>
            {showevents.map((event: Event, index: number) => (
              <div
                key={index}
                className="flex text-white items-center align-middle"
              >
                <Link href={`event/${event.id}`} style={contentStyle}>
                  <Image
                    src={event.display_image}
                    alt="Event Pic"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "50", objectFit: "cover" }}
                  />
                </Link>
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Row justify="center" className="text-white my-10 mx-20">
        <Col
          xl={{ span: 19 }}
          xs={{ span: 24 }}
          style={{ textAlign: "start" }}
          className="text-xl text-white"
        >
          Current Event
        </Col>

        <Row gutter={[24, 24]} justify="start" className="text-white my-10 ">
          {events.map((event: Event, index: number) => (
            <Col
              xl={{ span: 8 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
              key={index}
            >
              <Row gutter={[8, 8]} justify={"center"}>
                <Col span={24} style={{ paddingBottom: "75%" }}>
                  <Link href={`event/${event.id}`}>
                    <Image
                      src={event.display_image}
                      alt="Event Pic"
                      layout="fill"
                      objectFit="cover"
                    />
                  </Link>
                </Col>
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
