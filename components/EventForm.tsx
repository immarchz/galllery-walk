"use client";

import { User } from "@prisma/client";
import { toast } from "react-toastify";
import InputImage from "./InputImage";
import { uploadImage } from "@/utils/upload_image";

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

    const upload = await uploadImage("image", formData.get("image") as File);
    const { url } = await upload.json();

    const body = {
      title: formData.get("title"),
      description: formData.get("description"),
      event_start: formData.get("event_start"),
      event_end: formData.get("event_end"),
      organizer: formData.get("organizer"),
      money: formData.get("money"),
      display_image: url,
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
      <label htmlFor="title">title</label>
      <input
        type="text"
        name="title"
        defaultValue={event?.title ?? ""}
        required
      />
      <label htmlFor="description">description</label>

      <input
        type="text"
        name="description"
        defaultValue={event?.description ?? ""}
        required
      />
      <label htmlFor="event_start">event_start</label>

      <input
        type="datetime-local"
        name="event_start"
        defaultValue={event?.event_start ?? ""}
        required
      />
      <label htmlFor="event_end">event_end</label>

      <input
        type="datetime-local"
        name="event_end"
        defaultValue={event?.event_end ?? ""}
        required
      />
      <label htmlFor="organizer">organizer</label>

      <input
        type="text"
        name="organizer"
        defaultValue={event?.organizer ?? ""}
        required
      />
      <label htmlFor="money">money</label>

      <input
        type="text"
        name="money"
        defaultValue={event?.money ?? ""}
        pattern="[0-9]{1,5}"
        required
      />
      <InputImage name="image" required />
      <button type="submit">createEvent</button>
    </form>
  );
}
