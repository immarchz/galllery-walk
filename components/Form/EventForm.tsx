"use client";

import { uploadImage } from "@/utils/upload_image";
import { InboxOutlined, SyncOutlined } from "@ant-design/icons";
import { User } from "@prisma/client";
import type { DatePickerProps, UploadProps } from "antd";
import { Button, Card, Col, Form, Input, Row, Upload, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { toast } from "react-toastify";
import InputImage from "../InputImage";
import { useRouter } from "next/navigation";

export default function EventForm({
  user,
  event,
  create,
}: {
  user: User;
  event: any;
  create?: boolean;
}) {
  const router = useRouter();

  const updateEvent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const upload = await uploadImage("image", formData.get("image") as File);
    const { url } = await upload.json();

    const body = {
      id: event.id,
      title: formData.get("title"),
      description: formData.get("description"),
      event_start: formData.get("event_start"),
      event_end: formData.get("event_end"),
      organizer: formData.get("organizer"),
      money: formData.get("money"),
      display_image: url,
      user_id: user.id,
    };

    await toast.promise(
      fetch("/api/event", {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      }),
      {
        pending: "Update event",
        error: "",
        success: "done",
      },
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );

    router.replace(`${process.env.NEXT_PUBLIC_BASE_URL}/event`);
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

    await toast.promise(
      fetch("/api/event", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      }),
      {
        pending: "Create event",
        error: "",
        success: "done",
      },
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );

    router.replace(`${process.env.NEXT_PUBLIC_BASE_URL}/event`);
  };

  const config = {
    rules: [
      {
        type: "object" as const,
        required: true,
        message: "Please select time!",
      },
    ],
  };

  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const onFinish = (values: any) => {
    console.log("values", values);
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const styles = {
    centeredButton: {
      color: "white",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center", // Horizontally center the content
    },
  };

  return (
    // <form
    //   style={{ background: "tomato" }}
    //   onSubmit={create ? createEvent : updateEvent}
    // >
    //   <label htmlFor="title">title</label>
    //   <input
    //     type="text"
    //     name="title"
    //     defaultValue={event?.title ?? ""}
    //     required
    //   />
    //   <label htmlFor="description">description</label>

    //   <input
    //     type="text"
    //     name="description"
    //     defaultValue={event?.description ?? ""}
    //     required
    //   />
    //   <label htmlFor="event_start">event_start</label>

    //   <input
    //     type="datetime-local"
    //     name="event_start"
    //     defaultValue={event?.event_start ?? ""}
    //     required
    //   />
    //   <label htmlFor="event_end">event_end</label>

    //   <input
    //     type="datetime-local"
    //     name="event_end"
    //     defaultValue={event?.event_end ?? ""}
    //     required
    //   />
    //   <label htmlFor="organizer">organizer</label>

    //   <input
    //     type="text"
    //     name="organizer"
    //     defaultValue={event?.organizer ?? ""}
    //     required
    //   />
    //   <label htmlFor="money">money</label>

    //   <input
    //     type="text"
    //     name="money"
    //     defaultValue={event?.money ?? ""}
    //     pattern="[0-9]{1,5}"
    //     required
    //   />
    //   <InputImage name="image" placeholder={event?.display_image} required />
    //   <button type="submit">{create ? "create event" : "edit event"}</button>
    // </form>
    <div className="mx-10 mb-10">
      <form onSubmit={create ? createEvent : updateEvent}>
        <Row justify={"center"} gutter={[24, 24]} className="">
          <Col xs={24} xl={8}>
            <Card
              className="text-white"
              style={{
                width: "100%",
                height: 800,
                backgroundColor: "#1E1E1E",
                border: "none",
              }}
            >
              <Row justify={"start"}>
                <Col xs={24} xl={24}>
                  <div className="mx-8 my-5 ">
                    <Row className="my-4" justify={"start"}>
                      <Col span={12}>Title</Col>
                    </Row>
                    <Row gutter={[24, 24]}>
                      <Col span={24}>
                        <Input
                          type="text"
                          name="title"
                          defaultValue={event?.title ?? ""}
                          required
                          style={{
                            width: "100%",
                            height: 32,
                            backgroundColor: "#1E1E1E",
                            borderRadius: "6px",
                            color: "white",
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className="my-4" justify={"start"}>
                      <Col span={12}>Description</Col>
                    </Row>
                    <Row gutter={[24, 24]}>
                      <Col span={24}>
                        <TextArea
                          name="description"
                          defaultValue={event?.description ?? ""}
                          required
                          style={{
                            width: "100%",
                            height: 106,
                            backgroundColor: "#1E1E1E",
                            borderRadius: "6px",
                            verticalAlign: "top",
                            textAlign: "left",
                            color: "white",
                          }}
                        />
                      </Col>
                    </Row>
                    <Row className="" justify={"start"}>
                      <Col span={11}>
                        <Row className="my-4">Event Start</Row>

                        <Row>
                          <input
                            style={{
                              width: "100%",
                            }}
                            type="datetime-local"
                            name="event_start"
                            defaultValue={event?.event_start ?? ""}
                            required
                          />
                        </Row>
                      </Col>
                      <Col span={2}></Col>
                      <Col span={11}>
                        <Row className="my-4">Event End</Row>

                        <Row>
                          <input
                            style={{
                              width: "100%",
                            }}
                            type="datetime-local"
                            name="event_end"
                            defaultValue={event?.event_end ?? ""}
                            required
                          />
                        </Row>
                      </Col>
                    </Row>

                    <Row className="my-4" justify={"start"}>
                      <Col span={12}>Upload Photo</Col>
                    </Row>
                    <Row gutter={[24, 24]}>
                      <Col span={24}>
                        <InputImage
                          name="image"
                          placeholder={event?.display_image}
                          required
                        />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={24} xl={8}>
            <Card
              className="text-white "
              style={{
                width: "100%",
                height: 800,
                backgroundColor: "#1E1E1E",
                border: "none",
                color: "white",
              }}
            >
              <Row justify={"start"}>
                <Col xs={24} xl={24}>
                  <div className="mx-8 my-5 ">
                    <Row className="my-4" justify={"start"}>
                      <Col span={12}>Organizer</Col>
                    </Row>
                    <Row gutter={[24, 24]}>
                      <Col span={24}>
                        <Input
                          type="text"
                          name="organizer"
                          defaultValue={event?.organizer ?? ""}
                          required
                          style={{
                            width: "100%",
                            height: 30,
                            backgroundColor: "#1E1E1E",
                            borderRadius: "6px",
                            color: "white",
                          }}
                        />
                      </Col>
                    </Row>

                    <Row className="my-4" justify={"start"}>
                      <Col span={12}>Money</Col>
                    </Row>
                    <Row gutter={[24, 24]}>
                      <Col span={24}>
                        <Input
                          type="text"
                          name="money"
                          defaultValue={event?.organizer ?? ""}
                          required
                          style={{
                            width: "100%",
                            height: 30,
                            backgroundColor: "#1E1E1E",
                            borderRadius: "6px",
                            color: "white",
                          }}
                        />
                      </Col>
                    </Row>

                    <Row className="my-4" justify={"start"}>
                      <Col span={12}>Invitation Code</Col>
                    </Row>
                    <Row gutter={[24, 24]}>
                      <Col span={20}>
                        <Input
                          addonAfter={
                            <Button
                              type="primary"
                              style={{ backgroundColor: "#1E1E1E" }}
                            >
                              Copy
                            </Button>
                          }
                          style={{
                            width: "100%",
                            height: 30,
                            backgroundColor: "#1E1E1E",

                            borderRadius: "6px",
                          }}
                        />
                      </Col>
                      <Col span={4}>
                        <Button
                          style={styles.centeredButton}
                          icon={<SyncOutlined />}
                        />
                      </Col>
                    </Row>

                    <Row justify={"center"} className="mt-3">
                      <Button
                        style={{ backgroundColor: "white", color: " black" }}
                        htmlType="submit"
                      >
                        {create ? "Create Event" : "Edit Event"}
                      </Button>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </form>
    </div>
  );
}
