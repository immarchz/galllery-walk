"use client";
import { Card, Space, Row, Col } from "antd";
import Link from "next/link";

interface currentPorjectListInterface {
  img: string;
  projectName: string;
  desc: string;
  linkto: string;
}

const projectListArr: currentPorjectListInterface[] = [
  {
    img: "Test",
    projectName: "test",
    desc: "test",
    linkto: "/SingleProject",
  },
  {
    img: "Test",
    projectName: "test",
    desc: "test",
    linkto: "/SingleProject",
  },
  {
    img: "Test",
    projectName: "test",
    desc: "test",
    linkto: "/SingleProject",
  },
  {
    img: "Test",
    projectName: "test",
    desc: "test",
    linkto: "/SingleProject",
  },
  {
    img: "Test",
    projectName: "test",
    desc: "test",
    linkto: "/SingleProject",
  },
  {
    img: "Test",
    projectName: "test",
    desc: "test",
    linkto: "/SingleProject",
  },
];

export default function ProjectList() {
  const projectinfo = projectListArr;
  return (
    <div className="bg-black">
      <Row justify="center" className="text-white mb-10">
        <Col>Event Name</Col>
      </Row>
      <Row gutter={[24, 24]} justify="center">
        {projectinfo.map(
          (event: currentPorjectListInterface, index: number) => (
            <Col
              key={index}
              span={6}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 5,
                marginRight: 5,
              }}
            >
              <Link href={event.linkto}>
                <Card title={event.img} style={{ width: 300 }}>
                  <p>{event.projectName}</p>
                  <p>{event.desc}</p>
                </Card>
              </Link>
            </Col>
          )
        )}
      </Row>
    </div>
  );
}
