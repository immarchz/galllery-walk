"use client";
import { Comment, User } from "@prisma/client";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function LikeCommentButton({
  comment,
  user,
}: {
  comment: Comment;
  user: User;
}) {
  const router = useRouter();

  async function like() {
    const data = {
      user_id: user.id,
      comment_id: comment.id,
    };

    await toast.promise(
      fetch("/api/project/comment/like", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }),
      {
        pending: "Joining event ..",
        error: "",
        success: "done",
      },
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );

    router.refresh();
  }
  async function dislike() {
    const data = {
      user_id: user.id,
      comment_id: comment.id,
    };

    await toast.promise(
      fetch("/api/project/comment/like", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }),
      {
        pending: "Joining event ..",
        error: "",
        success: "done",
      },
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    router.refresh();
  }

  const isUesrJoin = true;

  return (
    <Button
      className="bg-white text-black hover:bg-white"
      onClick={isUesrJoin ? dislike : like}
    >
      {isUesrJoin ? "dislike" : "like"}
    </Button>
  );
}
