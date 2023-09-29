"use client";
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

interface DataType {
  key: string;
  name: string;
  email: string;
  role: string[];
}

export default function Admin() {
  const [dataSource, setdataSource] = useState([
    {
      name: "Rocklee lnwza",
      email: "rockleelnwza@gmail.com",
      role: "Admin",
    },
  ]);

  const columns: ColumnsType<DataType> = [
    {
      title: "",
      key: "1",
      width: 50,
      align: "left",
      render: (record) => {
        return (
          <Button
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => handleDelete(record.key)}
          >
            <DeleteOutlined />
          </Button>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "2",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "3",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "role",
      key: "4",
      dataIndex: "role",
      width: 120,
      render: (text) => <Tag color="blue">{text}</Tag>,
    },
  ];

  const handleDelete = (key) => {
    // Find the index of the row to delete
    const dataIndex = dataSource.findIndex((item) => item.key === key);
    if (dataIndex !== -1) {
      // Remove the row from the data source
      const newData = [...dataSource];
      newData.splice(dataIndex, 1);
      setdataSource(newData);
    }
  };

  return (
    <div className="text-white mx-5">
      <Row justify={"center"}>
        <Col span={20}>
          <Card
            title="Admin Dashboard"
            style={{ width: "100%", height: "500px" }}
          >
            <Row justify={"start"}>
              <Col className="mb-2">Add member</Col>
            </Row>
            <Form>
              <Row gutter={[24, 8]} justify={"start"}>
                <Col xl={{ span: 8 }} xs={{ span: 24 }}>
                  <Row>
                    <Col>Name</Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Input />
                    </Col>
                  </Row>
                </Col>
                <Col xl={{ span: 8 }} xs={{ span: 24 }}>
                  <Row>
                    <Col>Email</Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Input />
                    </Col>
                  </Row>
                </Col>
                <Col xl={{ span: 8 }} xs={{ span: 24 }}>
                  <Row>
                    <Col>Role</Col>
                  </Row>
                  <Row>
                    <Col>
                      <Select />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row justify={"start"}>
                <Col span={24}>
                  <Button className="my-3">Add</Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Table
                    rowKey="key"
                    pagination={false}
                    scroll={{ x: 1000, y: 500 }}
                    style={{ width: "100%" }}
                    columns={columns}
                    dataSource={dataSource}
                  />
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
