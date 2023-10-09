"use client";
import { Card, Space, Row, Col, List, Divider } from "antd";
import Link from "next/link";
import Image from "next/image";
import Meta from "antd/es/card/Meta";
interface currentPorjectListInterface {
  img: string;
  projectName: string;
  desc: string;
  linkto: string;
  time: string;
}

interface EventInterface {
  name: string;
  img: string;
}

const eventArr: EventInterface[] = [
  {
    name: "Event Name",
    img: "/singleImageTest.svg",
  },
];

const projectListArr: currentPorjectListInterface[] = [
  {
    img: "/Media.svg",
    projectName: "test",
    desc: "test",
    linkto: "/SingleProject",
    time: "Aug 3, 2016",
  },
  {
    img: "/Media.svg",
    projectName: "test",
    desc: "test",
    linkto: "/SingleProject",
    time: "Aug 3, 2016",
  },
  {
    img: "/Media2.svg",
    projectName: "test",
    desc: "test",
    linkto: "/SingleProject",
    time: "Aug 3, 2016",
  },
  {
    img: "/Media2.svg",
    projectName: "test",
    desc: "test",
    linkto: "/SingleProject",
    time: "Aug 3, 2016",
  },
];

export default function ProjectList() {
  const projectinfo = projectListArr;
  const eventInfo = eventArr;
  return (
    <div className="text-white mx-10">
      {eventInfo.map((event: EventInterface, index: number) => (
        <div key={index}>
          <Row gutter={[8, 8]} justify={"center"}>
            <Col>
              <Row justify="start" className="mt-5 mb-3">
                <Col className="xl:text-lg xs:text-lg">{event.name}</Col>
              </Row>
              <Row justify={"center"}>
                <Image
                  src={event.img}
                  alt="Event Pic"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                />
              </Row>

              <Row justify={"start"} className="mt-5 mb-3">
                <Col className="xl:text-[20px]">Projects</Col>
              </Row>
              <Row justify={"center"}>
                <List
                  className=""
                  grid={{
                    gutter: 24,
                    xs: 1,
                    sm: 1,
                    md: 2,
                    lg: 2,
                    xl: 3,
                    xxl: 3,
                  }}
                  dataSource={projectinfo}
                  renderItem={(item) => (
                    <List.Item
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "10px",
                        alignItems: "center",
                      }}
                    >
                      <Link href={item.linkto}>
                        <Card
                          title={
                            <Meta title={item.projectName} className="my-1" />
                          }
                          style={{ width: 300 }}
                          cover={
                            <Image
                              alt=""
                              src={item.img}
                              width={280}
                              height={280}
                            />
                          }
                        >
                          {item.desc}
                        </Card>
                      </Link>
                    </List.Item>
                  )}
                />
              </Row>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}
