import { checkServerSession } from "@/utils/checkServerSession";
import { findUserWithSession } from "@/utils/findUserWithSession";
import { Button, Card, Col, Input, Row } from "antd";

import Image from "next/image";
import CommentForm from "./Form/CommentForm";
import { Comment, Project, User } from "@prisma/client";

export default async function Comment({
  project,
}: {
  project: Project & { comments: (Comment & { user: User })[] };
}) {
  const session = await checkServerSession();
  const user = await findUserWithSession(session);

  return (
    <div className="text-white">
      <Row className="my-10 flex flex-wrap" gutter={[24, 24]}>
        <Col xl={{ span: 4 }} xs={{ span: 8 }}>
          <Image
            src={`${user?.image}`}
            alt=""
            width="100"
            height="100"
            className="flex rounded-full "
          />
        </Col>
        <Col xl={{ span: 12 }} xs={{ span: 16 }}>
          <CommentForm user={user!} project_id={project.id} />
        </Col>
        <Col xl={{ span: 0 }} xs={{ span: 8 }}></Col>
        <Col xl={{ span: 8 }} xs={{ span: 16 }}>
          <Card title="Donate" style={{ height: 170, width: "100%" }}>
            <Row>
              <Input className="mb-2"></Input>
            </Row>
            <Row justify={"center"}>
              <Button>Donate</Button>
            </Row>
          </Card>
        </Col>
      </Row>
      {project.comments.map((comment, index: number) => (
        <div key={index}>
          <Row gutter={[24, 24]} className="mb-3">
            <Col span={4} className="">
              <Image
                src={comment.user.image ?? ""}
                alt=""
                width="80"
                height="80"
                className="flex rounded-full bg-whit "
              />
            </Col>

            <Col
              xl={{ span: 7 }}
              xs={{ span: 8 }}
              className="xl:text-xl  mb-1 flex items-center"
            >
              <p className="">{comment.user.name}</p>
            </Col>
            <Col span={8} className="text-stone-400 flex items-center">
              <p>{comment.user.email}</p>
            </Col>

            <Col span={24} className="xl:text-xl sm:text:lg mb-3">
              {comment.comment}
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}
