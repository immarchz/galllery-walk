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
} from "antd";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PlusOutlined, SearchOutlined, SyncOutlined } from "@ant-design/icons";
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

export default function createForm() {
  const members = membersArr;
  const { data: session } = useSession();

  if (session && session?.user) {
    return (
      <div className="mx-10">
        <Form name="projectCreate" autoComplete="off">
          <Row justify={"center"} gutter={[24, 24]} className="">
            <Col xs={24} xl={8}>
              <Card
                className="text-white"
                style={{
                  width: "100%",
                  height: 1051,
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
                            <Upload listType="picture-card">
                              <PlusOutlined
                                style={{
                                  width: "100%",
                                  color: "white",
                                }}
                              />
                            </Upload>
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
                  height: 1051,
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
                        {/* <Col span={4}>
                          <Button
                            style={{
                              color: "white",
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <SyncOutlined />
                          </Button>
                        </Col> */}
                      </Row>
                      <Row className="mb-4" justify={"start"}>
                        <Col span={12}>Members</Col>
                      </Row>
                      <Row gutter={[24, 24]}>
                        <Col span={24}>
                          <Form.Item<FieldType> name="attach">
                            <Input
                              placeholder="Filter by name"
                              style={{
                                width: "100%",
                                height: 32,
                                backgroundColor: "#1E1E1E",
                                borderRadius: "6px",
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
                                src={`${session.user.image}`}
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
                                style={{
                                  width: "100%",
                                  color: "black",
                                }}
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
  }
}
