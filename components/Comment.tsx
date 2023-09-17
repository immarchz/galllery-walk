import React, { useState } from "react";
import { Input, Form, Row, Col } from "antd";

import { useSession } from "next-auth/react";
import Image from "next/image";

const { TextArea } = Input;

interface Comment {
  pic: string;
  name: string;
  body: string;
  time: string;
}

const dummyComments = [
  {
    pic: "",
    name: "test",
    body: "Test comment",
    time: "9/17/2023 11:49 AM",
  },
];

const Comment = () => {
  const { data: session } = useSession();

  const comments = dummyComments;

  if (session && session.user) {
    return (
      <>
        <Form className="text-white">
          <Row className="my-10">
            <Col>
              <Image
                src={`${session.user.image}`}
                alt=""
                width="100"
                height="100"
                className="flex rounded-full bg-whit mr-5"
              />
            </Col>
            <Col>
              <TextArea style={{ width: 940 }} rows={4} />
            </Col>
          </Row>

          {comments.map((event: Comment, index: number) => (
            <div key={index}>
              <Row>
                <Col>
                  <Image
                    src={event.pic}
                    alt=""
                    width="80"
                    height="80"
                    className="flex rounded-full bg-whit mr-5"
                  />
                </Col>
                <Col>
                  <Row>
                    <Col className="text-2xl mb-1 mr-3 flex items-center">
                      {event.name}
                    </Col>
                    <Col className="text-stone-400 flex items-center">
                      {event.time}
                    </Col>
                  </Row>

                  <Col className="text-xl mb-3">{event.body}</Col>
                </Col>
              </Row>
            </div>
          ))}
        </Form>
      </>
    );
  }
};

export default Comment;
