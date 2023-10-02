"use client";
import Link from "next/link";
import Image from "next/image";
import { Button, Col, Row, Divider } from "antd";
import { useSession } from "next-auth/react";
import Comment from "@/components/Comment";
import {
  ContainerOutlined,
  FileOutlined,
  PaperClipOutlined,
  TeamOutlined,
} from "@ant-design/icons";

interface projectInterface {
  img: string;
  description: string;
  projectName: string;
  time: string;
  info: string;
  contact: string;
  members: string;
}

interface membersInterface {
  name: string;
}

const membersArr: membersInterface[] = [
  {
    name: "Rocklee lnwza",
  },
  {
    name: "Genshin gameDee",
  },
];

const projectArr: projectInterface[] = [
  {
    img: "/Media2.svg",
    description:
      "ISEKAI คือ นิทรรศการเดี่ยวครั้งแรกของ Guong (กวง) - ณภพ เชาวนพูนผล บอกเล่าเกี่ยวกับ สาเหตุแห่งความนิยมมากล้น ที่มีต่อการ์ตูนแนวต่าง",
    projectName: '"ISEKAI"',
    time: "Monday, November 27 · 5:00 pm - 9:30 pm",
    info: "นิทรรศการจะถ่ายทอดแนวคิดทั้งหมดนี้ ผ่านสิ่งที่ character สุดน่ารักอย่าง Erite และ Cooley ได้พบเจอ ซึ่งหากสังเกตดี ๆ ผู้ชมจะพบสัญลักษณ์ประจำตัวของศิลปิน แทรกอยู่ในทุกผลงาน นั่นก็คือ ดวงตาที่มีลักษณะคล้าย “embryo” (ตัวอ่อนระยะแรกของสิ่งมีชีวิตหลายเซลล์) สื่อความหมายถึง สายตาอันไร้เดียงสา และความคิดที่เป็นอิสระของเหล่าเด็ก ๆ นั่นเอง",
    contact: "089-111-1111",
    members: "Test1",
  },
];

export default function SingleEvent() {
  const { data: session } = useSession();
  const projectInfo = projectArr;
  const members = membersArr;

  if (session && session?.user) {
    return (
      <div className="text-white mx-10 mb-10">
        {projectInfo.map((event: projectInterface, index: number) => (
          <div key={index} className="">
            <Row gutter={[24, 24]} justify={"center"}>
              <Col>
                <Image
                  src={event.img}
                  alt="Event Pic"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "50" }}
                />
                <Row justify="start" className="mt-5 mb-3">
                  <Col className="2xl:text-[20px]">{event.projectName}</Col>
                </Row>
                <Row justify="start" className="mb-3">
                  <Col
                    xl={{ span: 1 }}
                    xs={{ span: 2 }}
                    className="flex items-start mt-1"
                  >
                    <ContainerOutlined />
                  </Col>
                  <Col span={5} className="flex text-start">
                    About This Project
                  </Col>
                  <Col
                    xs={{ span: 17 }}
                    xl={{ span: 18 }}
                    className="text-left text-ellipsis"
                    style={{ width: 720 }}
                  >
                    {event.description}
                  </Col>
                </Row>
                <Row justify="start" className="mb-3">
                  <Col
                    xl={{ span: 1 }}
                    xs={{ span: 2 }}
                    className="flex items-start mt-1 "
                  >
                    <PaperClipOutlined />
                  </Col>
                  <Col span={5} className="text-start">
                    Media
                  </Col>
                  <Col
                    xs={{ span: 17 }}
                    xl={{ span: 18 }}
                    className="text-left text-ellipsis"
                    style={{ width: 720 }}
                  >
                    {event.info}
                  </Col>
                </Row>
                <Row justify="start" className="">
                  <Col
                    xl={{ span: 1 }}
                    xs={{ span: 2 }}
                    className="mt-1 flex items-start"
                  >
                    <TeamOutlined />
                  </Col>
                  <Col span={5} className="text-start">
                    Members
                  </Col>
                  <Col xs={{ span: 17 }} xl={{ span: 18 }}>
                    {members.map((event: membersInterface, index: number) => (
                      <Row key={index} gutter={[8, 8]} justify={"start"}>
                        <Col>{event.name}</Col>
                      </Row>
                    ))}
                  </Col>
                </Row>
                <Divider className="  border-white" />
                <Row justify="start" className="mt-5 ">
                  <Col>
                    <Comment />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="text-white ">
      {projectInfo.map((event: projectInterface, index: number) => (
        <div key={index} className="">
          <Row gutter={[24, 24]}>
            <Col>
              <Image
                src={event.img}
                alt="Event Pic"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "50" }}
              />
              <Row justify="start" className="mt-5 mb-3">
                <Col className="2xl:text-[20px]">{event.projectName}</Col>
              </Row>
              <Row justify="start" className="mb-3">
                <Col
                  xl={{ span: 1 }}
                  xs={{ span: 2 }}
                  className="flex items-start mt-1"
                >
                  <ContainerOutlined />
                </Col>
                <Col span={5} className="flex text-start">
                  About This Project
                </Col>
                <Col
                  xs={{ span: 17 }}
                  xl={{ span: 18 }}
                  className="text-left text-ellipsis"
                  style={{ width: 720 }}
                >
                  {event.description}
                </Col>
              </Row>
              <Row justify="start" className="mb-3">
                <Col
                  xl={{ span: 1 }}
                  xs={{ span: 2 }}
                  className="flex items-start mt-1 "
                >
                  <PaperClipOutlined />
                </Col>
                <Col span={5} className="text-start">
                  Media
                </Col>
                <Col
                  xs={{ span: 17 }}
                  xl={{ span: 18 }}
                  className="text-left text-ellipsis"
                  style={{ width: 720 }}
                >
                  {event.info}
                </Col>
              </Row>
              <Row justify="start" className="">
                <Col
                  xl={{ span: 1 }}
                  xs={{ span: 2 }}
                  className="mt-1 flex items-start"
                >
                  <TeamOutlined />
                </Col>
                <Col span={5} className="text-start">
                  Members
                </Col>
                <Col xs={{ span: 17 }} xl={{ span: 18 }}>
                  {members.map((event: membersInterface, index: number) => (
                    <Row key={index} gutter={[8, 8]} justify={"start"}>
                      <Col>{event.name}</Col>
                    </Row>
                  ))}
                </Col>
              </Row>
              <Divider className="  border-white" />
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}
