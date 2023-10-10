"use client";

import { User } from "@prisma/client";
import { Col, Row } from "antd";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Input } from "antd";

const { TextArea } = Input;

export default function CommentForm({
  user,
  project_id,
}: {
  user: User;
  project_id: string;
}) {
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      project_id,
      user_id: user.id,
      comment: formData.get("comment"),
    };

    await toast.promise(
      fetch("/api/project/comment", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      }),
      {
        pending: "Commenting",
        error: "",
        success: "done",
      },
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    router.refresh();
  };

  return (
    <form onSubmit={onSubmit}>
      <Row justify={"center"} gutter={[24, 24]}>
        <Col span={24}>
          <TextArea
            name="comment"
            style={{
              color: "black",
              width: "100%",
              height: "150px",
            }}
          />
          <button type="submit">Comment</button>
        </Col>
      </Row>
    </form>
  );
}
