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
import Link from "next/link";

interface DataType {
  // key: string;
  projectname: string;
  price: string;
  linkto: string;
}

export default function Leaderboard() {
  const [dataSource, setdataSource] = useState<DataType[]>([
    {
      projectname: "TEST PROJECT NAME 1",
      price: "10000",
      linkto: "/SIngleProject",
    },
    { projectname: "TEST PROJECT NAME 2", price: "8000", linkto: "" },
    {
      projectname: "TEST PROJECT NAME 3",
      price: "7000",
      linkto: "",
    },
    {
      projectname: "TEST PROJECT NAME 4",
      price: "6000",
      linkto: "",
    },
  ]);

  const columns: ColumnsType<DataType> = [
    {
      title: "No.",
      dataIndex: "index",
      key: "index",
      width: 80,
      render: (_, record, index) => index + 1,
    },
    {
      title: "Project Name",
      dataIndex: "projectname",
      key: "2",
      render: (text, record) => (
        // <Link href={`${dataSource.linkto}`}>{text}</Link>
        <Link href={`/`}>{text}</Link>
      ),
    },

    {
      title: "Investment",
      key: "3",
      dataIndex: "price",

      render: (text) => <Tag color="blue">{text}</Tag>,
    },
  ];

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <div className="text-white mx-5 mb-5">
      <Row justify={"center"}>
        <Col span={20}>
          <Card title="LeaderBoard" style={{ width: "100%", height: "100%" }}>
            <Row>
              <Col>
                <Table
                  rowKey="key"
                  pagination={{ pageSize: 10 }}
                  scroll={{ x: 1000, y: 500 }}
                  style={{ width: "100%" }}
                  columns={columns}
                  dataSource={dataSource}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
