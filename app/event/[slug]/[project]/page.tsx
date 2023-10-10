import { prisma } from "@/lib/prisma";
import { checkServerSession } from "@/utils/checkServerSession";
import {
  ContainerOutlined,
  PaperClipOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Button, Col, Divider, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import Comment from "@/components/Comment";
import QrCode from "@/components/QrCode";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string; project: string };
}) {
  await checkServerSession();

  const project = await prisma.project.findFirst({
    where: {
      id: {
        equals: params.project,
      },
    },
    include: {
      transactions: true,
      comments: {
        include: {
          user: true,
          likes: true,
        },
      },
    },
  });

  if (!project) {
    return (
      <div className="flex min-h-screen bg-cover bg-black text-white">
        <span>Sorry project not found</span>
      </div>
    );
  }

  return (
    <div className="text-white mx-10 mb-10">
      <div>
        <Row gutter={[24, 24]} justify={"center"}>
          <Col>
            <Image
              src={project.display_image}
              alt="Event Pic"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "50" }}
            />
            <Row justify="start" className="mt-5 mb-3">
              <Col className="2xl:text-[20px]">{project.title}</Col>
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
                {project.abstract}
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
                {project.abstract}
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
                {/* {members.map((event: membersInterface, index: number) => (
                  <Row key={index} gutter={[8, 8]} justify={"start"}>
                    <Col>{event.name}</Col>
                  </Row>
                ))} */}
              </Col>
            </Row>
            <QrCode value={`event/${params.slug}/${params.project}`} />
            <Row justify={"center"}>
              <Col>
                <Link
                  href={`${process.env.NEXT_PUBLIC_BASE_URL}/event/${params.slug}/${params.project}/edit`}
                >
                  <Button
                    style={{
                      backgroundColor: "white",
                    }}
                    className="mt-8"
                  >
                    Edit
                  </Button>
                </Link>
              </Col>
            </Row>
            <Divider className="  border-white" />
            <Row justify="start" className="mt-5 ">
              <Col>
                <Comment project={project} />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}
