"use client";

import { User } from "@prisma/client";
import { toast } from "react-toastify";

export default function EventForm({
  user,
  event,
  create,
}: {
  user: User;
  event: any;
  create: boolean | undefined;
}) {
  const updateEvent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get("name"),
      bio: formData.get("bio"),
      age: formData.get("age"),
      image: formData.get("image"),
    };

    const res = await fetch("/api/user", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await res.json();
  };

  const createEvent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      title: formData.get("title"),
      description: formData.get("description"),
      event_start: formData.get("event_start"),
      event_end: formData.get("event_end"),
      organizer: formData.get("organizer"),
      money: formData.get("money"),
      user_id: user.id,
    };

    toast.promise(
      fetch("/api/event", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      }),
      {
        pending: "Toasss",
        error: "",
        success: "done",
      },
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );

    // await res.json();
  };

  return (
    <form
      style={{ background: "tomato" }}
      onSubmit={create ? createEvent : updateEvent}
    >
      <input
        type="text"
        name="title"
        defaultValue={event?.title ?? ""}
        required
      />
      <input
        type="text"
        name="description"
        defaultValue={event?.description ?? ""}
        required
      />
      <input
        type="datetime-local"
        name="event_start"
        defaultValue={event?.event_start ?? ""}
        required
      />
      <input
        type="datetime-local"
        name="event_end"
        defaultValue={event?.event_end ?? ""}
        required
      />
      <input
        type="text"
        name="organizer"
        defaultValue={event?.organizer ?? ""}
        required
      />
      <input
        type="text"
        name="money"
        defaultValue={event?.money ?? ""}
        pattern="[0-9]{1,5}"
        required
      />
      <input type="file" accept="image/*" />
      <button type="submit">createEvent</button>
    </form>
  );
}
