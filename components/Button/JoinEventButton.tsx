"use client";
import { Event, User } from "@prisma/client";
import { Button } from "antd";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function JoinEventButton({
  event,
  user,
}: {
  event: Event;
  user?: User | null;
}) {
  const router = useRouter();

  if (!user) {
    return (
      <Button
        className="bg-white text-black hover:bg-white"
        onClick={() => signIn()}
      >
        Join
      </Button>
    );
  }

  async function joinEvent() {
    const data = {
      id: event.id,
      participants: [...event.participants, user!.id],
    };

    await toast.promise(
      fetch("/api/event/participate", {
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
  async function disJoinEvent() {
    const data = {
      id: event.id,
      participants: event.participants.filter((p) => p !== user!.id),
    };

    await toast.promise(
      fetch("/api/event/participate", {
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

  const isUesrJoin = event.participants.includes(user.id);

  return (
    <Button
      className="bg-white text-black hover:bg-white"
      onClick={isUesrJoin ? disJoinEvent : joinEvent}
    >
      {isUesrJoin ? "DisjoinEvent" : "Join"}
    </Button>
  );
}
