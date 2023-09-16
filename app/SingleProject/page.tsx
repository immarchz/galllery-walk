"use client";
import Link from "next/link";
import Image from "next/image";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import MailIcon from "@mui/icons-material/Mail";
import { Button, Col, Row, Divider } from "antd";
import Stack from "@mui/material/Stack";
import { useSession } from "next-auth/react";

interface projectInterface {
  img: string;
  description: string;
  projectName: string;
  time: string;
  info: string;
  contact: string;
}

const projectArr: projectInterface[] = [
  {
    img: "/singleImageTest.svg",
    description:
      "ISEKAI คือ นิทรรศการเดี่ยวครั้งแรกของ Guong (กวง) - ณภพ เชาวนพูนผล บอกเล่าเกี่ยวกับ สาเหตุแห่งความนิยมมากล้น ที่มีต่อการ์ตูนแนวต่าง",
    projectName: '"ISEKAI"',
    time: "Monday, November 27 · 5:00 pm - 9:30 pm",
    info: "นิทรรศการจะถ่ายทอดแนวคิดทั้งหมดนี้ ผ่านสิ่งที่ character สุดน่ารักอย่าง Erite และ Cooley ได้พบเจอ ซึ่งหากสังเกตดี ๆ ผู้ชมจะพบสัญลักษณ์ประจำตัวของศิลปิน แทรกอยู่ในทุกผลงาน นั่นก็คือ ดวงตาที่มีลักษณะคล้าย “embryo” (ตัวอ่อนระยะแรกของสิ่งมีชีวิตหลายเซลล์) สื่อความหมายถึง สายตาอันไร้เดียงสา และความคิดที่เป็นอิสระของเหล่าเด็ก ๆ นั่นเอง",
    contact: "089-111-1111",
  },
];

export default function SingleEvent() {
  const { data: session } = useSession();
  const projectInfo = projectArr;

  if (session && session?.user) {
    return (
      <div className="text-white ">
        {projectInfo.map((event: projectInterface, index: number) => (
          <div key={index} className="">
            <Row gutter={[24, 24]} justify="center">
              <Col>
                <Image
                  src={event.img}
                  alt="Event Pic"
                  width={1062}
                  height={316}
                />
                <Row justify="start" className="mt-5 mb-3">
                  <Col className="xl:text-[20px]">Profile Color</Col>
                </Row>
                <Row justify="start" className="mt-5 mb-3">
                  <Col className="xl:text-[20px]">Project Name</Col>
                </Row>
                <Row>
                  <Col offset={1}>{event.projectName}</Col>
                </Row>
                <Row justify="start" className="mt-5 mb-3">
                  <Col className="xl:text-[20px]">Project Details</Col>
                </Row>
                <Row className="mt-5 mb-3">
                  <Col offset={1}>
                    <span className="">{event.description}</span>
                  </Col>
                </Row>
                <Row justify="start" className="mt-5 mb-3">
                  <Col className="xl:text-[20px]">Presentation Files</Col>
                </Row>
                <Row>
                  <Col offset={1}></Col>
                </Row>
                <Row justify="start" className="mt-5 mb-3">
                  <Col className="xl:text-[20px]">Media</Col>
                </Row>
                <Row>
                  <Col offset={1}></Col>
                </Row>
                <Row justify="start" className="mt-5 mb-3"></Row>
                <Divider className="my-4 h-4  border-white" />
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
          <Row gutter={[24, 24]} justify="center">
            <Col>
              <Image
                src={event.img}
                alt="Event Pic"
                width={1062}
                height={316}
              />
              <Row justify="start" className="mt-5 mb-3">
                <Col className="xl:text-[20px]">Profile Color</Col>
              </Row>
              <Row justify="start" className="mt-5 mb-3">
                <Col className="xl:text-[20px]">Project Name</Col>
              </Row>
              <Row>
                <Col offset={1}>{event.projectName}</Col>
              </Row>
              <Row justify="start" className="mt-5 mb-3">
                <Col className="xl:text-[20px]">Project Details</Col>
              </Row>
              <Row className="mt-5 mb-3">
                <Col offset={1}>
                  <span className="">{event.description}</span>
                </Col>
              </Row>
              <Row justify="start" className="mt-5 mb-3">
                <Col className="xl:text-[20px]">Presentation Files</Col>
              </Row>
              <Row>
                <Col offset={1}></Col>
              </Row>
              <Row justify="start" className="mt-5 mb-3">
                <Col className="xl:text-[20px]">Media</Col>
              </Row>
              <Row>
                <Col offset={1}></Col>
              </Row>
              <Row justify="start" className="mt-5 mb-3"></Row>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}
