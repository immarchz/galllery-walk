"use client";
import { Card, Space, Row, Col } from "antd";

interface currentPorjectListInterface {
  img: string;
  projectName: string;
  desc: string;
}

const projectListArr: currentPorjectListInterface[] = [
  {
    img: "Test",
    projectName: "test",
    desc: "test",
  },
  {
    img: "Test",
    projectName: "test",
    desc: "test",
  },
  {
    img: "Test",
    projectName: "test",
    desc: "test",
  },
  {
    img: "Test",
    projectName: "test",
    desc: "test",
  },
  {
    img: "Test",
    projectName: "test",
    desc: "test",
  },
  {
    img: "Test",
    projectName: "test",
    desc: "test",
  },
  {
    img: "Test",
    projectName: "test",
    desc: "test",
  },
  
];

export default function ProjectList() {
  const projectinfo = projectListArr;
  return (
    <div className="bg-black h-screen ">
      <Row gutter={[24,24]} justify="center">
        {projectinfo.map(
          (event: currentPorjectListInterface, index: number) => (
            <Row key={index}>
              <Col span={8}>
                <Card title={event.img} style={{ width: 300 }}>
                  <p>{event.projectName}</p>
                  <p>{event.desc}</p>
                </Card>
              </Col>
            </Row>
          )
        )}
      </Row>
    </div>
  );
}
