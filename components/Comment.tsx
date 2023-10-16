import { checkServerSession } from "@/utils/checkServerSession";
import { findUserWithSession } from "@/utils/findUserWithSession";
import { Button, Card, Col, Input, Row } from "antd";

import Image from "next/image";
import CommentForm from "./Form/CommentForm";
import { Comment, Event, Like, Project, User } from "@prisma/client";
import LikeCommentButton from "./Button/LikeCommentButton";
import DonateForm from "./Form/DonateForm";

export default async function Comment({
  project,
  event,
}: {
  project: Project & { comments: (Comment & { user: User; likes: Like[] })[] };
  event: Event;
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
          <DonateForm event={event} project={project} user={user!} />
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
