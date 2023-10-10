"use client";

import { Project } from "@prisma/client";
import { Card, List } from "antd";
import Meta from "antd/es/card/Meta";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function ProjectRender({ projects }: { projects: Project[] }) {
  return (
    <List
      className=""
      grid={{
        gutter: 24,
        xs: 1,
        sm: 1,
        md: 2,
        lg: 2,
        xl: 2,
        xxl: 2,
      }}
      dataSource={projects}
      renderItem={(item: Project) => (
        <List.Item
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10px",
            alignItems: "center",
          }}
        >
          <Link
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/event/${item.event_id}/${item.id}`}
          >
            <Card
              title={<Meta title={item.title} className="my-1" />}
              style={{ width: 300, height: 400 }}
              cover={
                <Image
                  alt=""
                  src={item.display_image}
                  width={280}
                  height={280}
                />
              }
            >
              {item.abstract}
            </Card>
          </Link>
        </List.Item>
      )}
    />
  );
}
