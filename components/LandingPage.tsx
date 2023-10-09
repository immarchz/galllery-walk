"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Col, Row } from "antd";

interface EventInterface {
  linkTo: string;
  img: string;
  title: string;
  time: string;
  location: string;
  price: number;
}

interface MainEventInterface {
  linkTo: string;
  img: string;
}

const maineventsArr: MainEventInterface[] = [
  {
    linkTo: "/SingleEvent",
    img: "/Eventpic.svg",
  },
];

const eventArr: EventInterface[] = [
  {
    linkTo: "/SingleEvent",
    img: "/topLeft.svg",
    title: "The World of Studio Ghibil's Animation Central World",
    time: "Mon Jul 17,7:00 PM",
    location: "Chiangmai",
    price: 200,
  },
  {
    linkTo: "/SingleEvent",
    img: "/topMid.svg",
    title: "The World of Studio Ghibil's Animation Central World",
    time: "Mon Jul 17,7:00 PM",
    location: "Chiangmai",
    price: 200,
  },
  {
    linkTo: "/SingleEvent",
    img: "/topRight.svg",
    title: "The World of Studio Ghibil's Animation Central World",
    time: "Mon Jul 17,7:00 PM",
    location: "Chiangmai",
    price: 200,
  },
  {
    linkTo: "/SingleEvent",
    img: "/bottomRight.svg",
    title: "The World of Studio Ghibil's Animation Central World",
    time: "Mon Jul 17,7:00 PM",
    location: "Chiangmai",
    price: 200,
  },
  {
    linkTo: "/SingleEvent",
    img: "/bottomMid.svg",
    title: "The World of Studio Ghibil's Animation Central World",
    time: "Mon Jul 17,7:00 PM",
    location: "Chiangmai",
    price: 200,
  },
  {
    linkTo: "/SingleEvent",
    img: "/bottomLeft.svg",
    title: "The World of Studio Ghibil's Animation Central World",
    time: "Mon Jul 17,7:00 PM",
    location: "Chiangmai",
    price: 200,
  },
];

const LandingPage = () => {
  const showevents = maineventsArr;
  const events = eventArr;

  return (
    <div className="bg-black ">
      <Row gutter={[24, 24]} justify="center">
        <Col>
          {showevents.map((event: MainEventInterface, index: number) => (
            <div key={index} className="flex text-white items-center mx-5">
              <Link href={event.linkTo}>
                <Image
                  src={event.img}
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
          {events.map((event: EventInterface, index: number) => (
            <Col key={index}>
              <Row justify={"center"}>
                <Link href={event.linkTo}>
                  <Image
                    src={event.img}
                    alt="Event Pic"
                    width={500}
                    height={400}
                  />
                </Link>
              </Row>
              <p className="mt-5 text-xl">{event.title}</p>
              <p className="text-stone-400 text-lg">{event.time}</p>
              <p className="text-stone-400 text-lg">{event.location}</p>
              <p className="text-stone-400 text-lg">{event.price} Baht</p>
            </Col>
          ))}
        </Row>
      </Row>
    </div>
  );
};

export default LandingPage;
