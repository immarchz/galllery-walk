import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Select,
  Space,
  Table,
  Tag,
} from "antd";
import React, { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { DeleteOutlined } from "@ant-design/icons";
import { EventCRUD, User } from "@prisma/client";
import CreateProjectPermissionButton from "@/components/Button/CreateProjectPermissionButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSideUser } from "@/helper/getCurrentUser";
import { useRouter } from "next/navigation";

// interface DataType {
//   key: string;
//   name: string;
//   email: string;
//   role: string[];
// }
async function getUsers() {
  // const users = fetch(`$`);
  const users = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`, {
    cache: "no-cache",
  });
  return await users.json();
}

export default async function Admin() {
  const session = await getServerSession(authOptions);
  const user = await getServerSideUser(session);
  if (!user) {
    window.location.pathname = process.env.NEXT_PUBLIC_BASE_URL as string;
  }

  const allow = JSON.parse(process.env.AUTH_ADMIN as string) as string[];

  if (!allow.includes(user?.email!)) {
    window.location.pathname = process.env.NEXT_PUBLIC_BASE_URL as string;
  }

  const users = await getUsers();

  // const [dataSource, setdataSource] = useState([
  //   {
  //     key: "Rocklee lnwza",
  //     name: "Rocklee lnwza",
  //     email: "rockleelnwza@gmail.com",
  //     role: "Admin",
  //   },
  //   {
  //     key: "Rocklee s",
  //     name: "Rocklee s",
  //     email: "rockleelnwza@gmail.com",
  //     role: "Admin",
  //   },
  //   {
  //     key: "x lnwza",
  //     name: "x lnwza",
  //     email: "rockleelnwza@gmail.com",
  //     role: "Admin",
  //   },
  // ]);

  // const columns: ColumnsType<DataType> = [
  //   {
  //     title: "",
  //     key: "1",
  //     width: 50,
  //     align: "left",
  //     render: (record) => {
  //       return (
  //         <Button
  //           style={{
  //             width: "100%",
  //             display: "flex",
  //             alignItems: "center",
  //             justifyContent: "center",
  //           }}
  //           onClick={() => handleDelete(record.key)}
  //         >
  //           <DeleteOutlined />
  //         </Button>
  //       );
  //     },
  //   },
  //   {
  //     title: "Name",
  //     dataIndex: "name",
  //     key: "2",
  //     render: (text) => <a>{text}</a>,
  //   },
  //   {
  //     title: "Email",
  //     dataIndex: "email",
  //     key: "3",
  //     render: (text) => <a>{text}</a>,
  //   },
  //   {
  //     title: "role",
  //     key: "4",
  //     dataIndex: "role",
  //     width: 120,
  //     render: (text) => <Tag color="blue">{text}</Tag>,
  //   },
  // ];

  // const handleDelete = (key: any) => {
  //   // Find the index of the row to delete
  //   const dataIndex = dataSource.findIndex((item) => item.key === key);
  //   if (dataIndex !== -1) {
  //     // Remove the row from the data source
  //     const newData = [...dataSource];
  //     newData.splice(dataIndex, 1);
  //     setdataSource(newData);
  //   }
  // };

  // const onFinish = (values: any) => {
  //   console.log("Success:", values);
  // };

  return (
    <div className="text-white mx-5 mb-5">
      <Row justify={"center"}>
        <Col span={20}>
          <Card
            title="Admin Dashboard"
            style={{ width: "100%", height: "100%" }}
          >
            <table>
              <thead>
                <tr>
                  <th>name</th>
                  <th>email</th>
                  <th>event create</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user: User & { eventCRUD: EventCRUD[] }) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <CreateProjectPermissionButton user={user} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* <Row gutter={[8, 8]} justify={"start"}>
              <Col className="mb-2">Add member</Col>
            </Row> */}
            {/* <Form name="form"> */}
            {/* <Row gutter={[24, 8]} justify={"start"}>
              <Col xl={{ span: 8 }} xs={{ span: 24 }}>
                <Row className="mb-1">
                  <Col>Name</Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item name={"name"}>
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col xl={{ span: 8 }} xs={{ span: 24 }}>
                <Row className="mb-1">
                  <Col>Email</Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item name={"email"}>
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col xl={{ span: 8 }} xs={{ span: 24 }}>
                <Row className="mb-1">
                  <Col>Role</Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <Form.Item name={"role"}>
                      <Select
                        style={{ width: "100%" }}
                        defaultValue="admin"
                        options={[{ value: "admin", label: "Admin" }]}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row justify={"start"}>
              <Col span={24}>
                <Button
                  className="my-3 text-black"
                  type="primary"
                  htmlType="submit"
                >
                  Add
                </Button>
              </Col>
            </Row> */}
            <Row>
              <Col>
                {/* <Table
                    rowKey="key"
                    pagination={{ pageSize: 3 }}
                    scroll={{ x: 1000, y: 500 }}
                    style={{ width: "100%" }}
                    columns={columns}
                    dataSource={dataSource}
                  /> */}
              </Col>
            </Row>
            {/* </Form> */}
          </Card>
        </Col>
      </Row>
    </div>
  );
}
