"use client";
import { Comment, Like, User } from "@prisma/client";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function LikeCommentButton({
  comment,
  user,
}: {
  comment: Comment & { user: User; likes: Like[] };
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
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }),
      {
        pending: "Like ..",
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
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }),
      {
        pending: "Dis Like ..",
        error: "",
        success: "done",
      },
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    router.refresh();
  }

  const isUserLike =
    comment.likes.filter((cm) => cm.userId === user.id).length > 0;

  return (
    <Button
      className="bg-white text-black hover:bg-white flex items-center"
      onClick={isUserLike ? dislike : like}
    >
      {isUserLike ? "💔" : "❤️"}
    </Button>
  );
}
