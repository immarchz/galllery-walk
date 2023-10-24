"use client";

import { uploadImage } from "@/utils/upload_image";
import { InboxOutlined, SyncOutlined } from "@ant-design/icons";
import { User } from "@prisma/client";
import type { DatePickerProps, UploadProps } from "antd";
import { Button, Card, Col, Form, Input, Row, Upload, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { toast } from "react-toastify";
import InputImage from "../InputImage";

export default function ProjectForm({
  user,
  event_id,
  project,
  create,
}: {
  user: User;
  event_id: string;
  project: any;
  create?: boolean;
}) {
  const updateProject = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const upload = await uploadImage("image", formData.get("image") as File);
    const { url } = await upload.json();

    const body = {
      id: project.id,
      title: formData.get("title"),
      abstract: formData.get("abstract"),
      display_image: url,
    };

    await toast.promise(
      fetch("/api/project", {
        method: "PUT",
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
  };

  const createProject = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const upload = await uploadImage("image", formData.get("image") as File);
    const { url } = await upload.json();

    const body = {
      event_id: event_id,
      title: formData.get("title"),
      abstract: formData.get("abstract"),
      display_image: url,
      user_id: user.id,
    };

    await toast.promise(
      fetch("/api/project", {
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
    //   onSubmit={create ? createProject : updateProject}
    // >
    //   <label htmlFor="title">title</label>
    //   <input
    //     type="text"
    //     name="title"
    //     defaultValue={project?.title ?? ""}
    //     required
    //   />

    //   <label htmlFor="abstract">abstract</label>
    //   <input
    //     type="text"
    //     name="abstract"
    //     defaultValue={project?.abstract ?? ""}
    //     required
    //   />

    //   <InputImage name="image" placeholder={project?.display_image} required />
    //   <button type="submit">{create ? "createproject" : "editproject"}</button>
    // </form>
    <div className="mx-10 mb-10">
      <form onSubmit={create ? createProject : updateProject}>
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
                          defaultValue={project?.title ?? ""}
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
                      <Col span={12}>Abstract</Col>
                    </Row>
                    <Row gutter={[24, 24]}>
                      <Col span={24}>
                        <TextArea
                          name="abstract"
                          defaultValue={project?.abstract ?? ""}
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

                    <Row className="mb-4" justify={"start"}>
                      <Col span={12}>Upload Photo</Col>
                    </Row>
                    <Row gutter={[24, 24]}>
                      <Col span={24}>
                        <InputImage
                          name="image"
                          placeholder={project?.display_image}
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

                    <Row className="my-4" justify={"center"}>
                      <Button
                        style={{ backgroundColor: "white", color: " black" }}
                        htmlType="submit"
                        type="primary"
                      >
                        {create ? "Create Project" : "Edit Project"}
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
