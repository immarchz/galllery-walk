"use client";

import { User } from "@prisma/client";
import { Input } from "antd";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

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
      <label htmlFor="comment" />
      <TextArea
        rows={4}
        type="text"
        name="comment"
        style={{ color: "black" }}
      />
      <button type="submit">Comment</button>
    </form>
  );
}
