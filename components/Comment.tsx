import { checkServerSession } from "@/utils/checkServerSession";
import { findUserWithSession } from "@/utils/findUserWithSession";
import { Button, Card, Col, Input, Row } from "antd";

import Image from "next/image";
import CommentForm from "./Form/CommentForm";
import { Comment, Like, Project, User } from "@prisma/client";
import LikeCommentButton from "./Button/LikeCommentButton";

export default async function Comment({
  project,
}: {
  project: Project & { comments: (Comment & { user: User; likes: Like[] })[] };
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
        <Col xl={{ span: 14 }} xs={{ span: 16 }}>
          <CommentForm user={user!} project_id={project.id} />
        </Col>
        <Col xl={{ span: 0 }} xs={{ span: 8 }}></Col>
        <Col xl={{ span: 6 }} xs={{ span: 16 }}>
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
          <Row gutter={[24, 24]}>
            <Col className="">
              <Image
                src={comment.user.image ?? ""}
                alt=""
                width="80"
                height="80"
                className="flex rounded-full bg-whit "
              />
            </Col>
            <Col>
              <Row>
                <Col className="text-2xl mb-1 mr-3 flex items-center">
                  {comment.user.name}
                </Col>
                <Col className="text-stone-400 flex items-center">
                  {comment.user.email}
                </Col>
              </Row>
              <Col className="text-xl mb-3">
                {comment.comment} ❤️ {comment.likes.length}
                <LikeCommentButton comment={comment} user={user!} />
              </Col>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}
