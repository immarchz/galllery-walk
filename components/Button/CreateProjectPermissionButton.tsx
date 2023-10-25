"use client";
import { Event, EventCRUD, User } from "@prisma/client";
import { Button } from "antd";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function CreateProjectPermissionButton({
  user,
}: {
  user: User & { eventCRUD: EventCRUD[] };
}) {
  const router = useRouter();

  async function joinEvent() {
    const data = {
      user_id: user.id,
    };

    fetch("/api/event/permission", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }),
      // await toast.promise(

      //   {
      //     pending: "Joining event ..",
      //     error: "",
      //     success: "done",
      //   },
      //   {
      //     position: toast.POSITION.BOTTOM_RIGHT,
      //   }
      // );

      router.refresh();
  }
  async function disJoinEvent() {
    const data = {
      user_id: user.id,
    };

    await toast.promise(
      fetch("/api/event/permission", {
        method: "DELETE",
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

  const isUesrJoin = user.eventCRUD.length > 0;

  return (
    <Button
      className="bg-white text-black hover:bg-white"
      onClick={isUesrJoin ? disJoinEvent : joinEvent}
    >
      {isUesrJoin ? "✅" : "❗"}
    </Button>
  );
}
