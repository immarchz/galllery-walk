"use client";
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Upload,
  UploadProps,
  message,
} from "antd";
import React from "react";
import { InboxOutlined, SyncOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

const { TextArea } = Input;

interface membersInterface {
  pic: string;
  name: string;
}

const membersArr: membersInterface[] = [
  {
    pic: "",
    name: "Test",
  },
  {
    pic: "",
    name: "Test",
  },
  {
    pic: "",
    name: "Test",
  },
];

type FieldType = {
  title?: string;
  desc?: string;
  photo?: string;
  attach?: string;
  org?: string;
  members?: string;
  link?: string;
};

const { Dragger } = Upload;

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

const styles = {
  centeredButton: {
    color: "white",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center", // Horizontally center the content
  },
};

export default function CreateForm() {
  const members = membersArr;
  const { data: session } = useSession();

  if (session && session?.user) {
    return (
      <div className="mx-10 mb-10">
        <Form name="projectCreate" autoComplete="off">
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
                          <Form.Item<FieldType>
                            name="title"
                            rules={[
                              {
                                required: true,
                                message: "Please input your Project Title!",
                              },
                            ]}
                          >
                            <Input
                              style={{
                                width: "100%",
                                height: 32,
                                backgroundColor: "#1E1E1E",
                                borderRadius: "6px",
                                color: "white",
                              }}
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row className="mb-4" justify={"start"}>
                        <Col span={12}>Description</Col>
                      </Row>
                      <Row gutter={[24, 24]}>
                        <Col span={24}>
                          <Form.Item<FieldType>
                            name="desc"
                            rules={[
                              {
                                required: true,
                                message:
                                  "Please input your Project Description!",
                              },
                            ]}
                          >
                            <TextArea
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
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row className="mb-4" justify={"start"}>
                        <Col span={12}>Upload Photo</Col>
                      </Row>
                      <Row gutter={[24, 24]}>
                        <Col span={24}>
                          <Form.Item<FieldType> name="photo">
                            <Dragger {...props}>
                              <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                              </p>
                              <p className="text-white">
                                Click or drag file to this area to upload
                              </p>
                              <p className="text-white">
                                Support for a single or bulk upload. Strictly
                                prohibited from uploading company data or other
                                banned files.
                              </p>
                            </Dragger>
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row className="mb-4" justify={"start"}>
                        <Col span={12}>Attachment</Col>
                      </Row>
                      <Row gutter={[24, 24]}>
                        <Col span={24}>
                          <Form.Item<FieldType>
                            name="attach"
                            rules={[
                              {
                                required: true,
                                message:
                                  "Please input your Project Attachment!",
                              },
                            ]}
                          >
                            <Input
                              style={{
                                width: "100%",
                                height: 32,
                                backgroundColor: "#1E1E1E",
                                borderRadius: "6px",
                                color: "white",
                              }}
                            />
                          </Form.Item>
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
                          <Form.Item<FieldType> name="org">
                            <Input
                              style={{
                                width: "100%",
                                height: 30,
                                backgroundColor: "#1E1E1E",
                                borderRadius: "6px",
                                color: "white",
                              }}
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row className="mb-4" justify={"start"}>
                        <Col span={12}>Members</Col>
                      </Row>
                      <Row className="mb-4" justify={"start"}>
                        <Col span={12}>Invitation Code</Col>
                      </Row>
                      <Row gutter={[24, 24]}>
                        <Col span={20}>
                          <Form.Item<FieldType> name="link">
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
                          </Form.Item>
                        </Col>
                        <Col span={4}>
                          <Button
                            style={styles.centeredButton}
                            icon={<SyncOutlined />}
                          />
                        </Col>
                      </Row>
                      <Row className="mb-4" justify={"start"}>
                        <Col span={12}>Members</Col>
                      </Row>
                      <Row gutter={[24, 24]}>
                        <Col span={24}>
                          <Form.Item<FieldType> name="members">
                            <Input
                              className="custom-placeholder "
                              placeholder="Filter by name"
                              style={{
                                width: "100%",
                                height: 32,
                                backgroundColor: "#1E1E1E",
                                borderRadius: "6px",
                                color: "white",
                              }}
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                      {members.map((event: membersInterface, index: number) => (
                        <>
                          <Row key={index}>
                            <Col span={2} className="flex items-center">
                              <Image
                                src={`${session!.user!.image}`}
                                alt=""
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                                className="flex rounded-full "
                              />
                            </Col>
                            <Col span={1}></Col>
                            <Col span={14} className="flex items-center">
                              {event.name}
                            </Col>
                            <Col span={6} className="flex items-center">
                              <Select
                                defaultValue="admin"
                                style={{
                                  width: "100%",
                                  color: "black",
                                }}
                                options={[
                                  { value: "admin", label: "Admin" },
                                  { value: "owner", label: "Owner" },
                                  { value: "member", label: "Member" },
                                ]}
                              />
                            </Col>
                          </Row>
                          <Row>
                            <Divider style={{ borderColor: "white" }} />
                          </Row>
                        </>
                      ))}
                      <Row justify={"center"}>
                        <Button style={{ color: "white" }}>Save</Button>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Form>
      </div>
    );
  } else {
    return <div>No auth</div>;
  }
}
