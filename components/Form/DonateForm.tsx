"use client";

import { Project, Transaction, User, Event } from "@prisma/client";
import { Button, Card, Input, Row } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

export default function DonateForm({
  user,
  project,
  event,
}: {
  user: User & { transactions: Transaction[] };
  project: Project;
  event: Event;
}) {
  const router = useRouter();

  const userUsedMoney = user.transactions.reduce(
    (accumulator, currentValue) =>
      currentValue.projectId === project.id
        ? accumulator + currentValue.amount
        : accumulator,
    0
  );
  const userLeftMoney = event.money - userUsedMoney;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const m = parseInt(formData.get("money") as string);

    if (userLeftMoney < m) {
      alert("don't have money left");
      return;
    }

    const body = {
      id: project.id,
      user_id: user.id,
      amount: formData.get("money"),
    };

    await toast.promise(
      fetch("/api/project/donate", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      }),
      {
        pending: "donation . . .",
        error: "",
        success: "done",
      },
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );

    router.refresh();
  }

  return (
    <form onSubmit={onSubmit}>
      <Card title="Donate" style={{ height: 170, width: "100%" }}>
        <Row>
          <input
            className="mb-2 border rounded-md"
            // pattern="/\d/g"
            required
            name="money"
          />
          <span>{userLeftMoney} Bath</span>
        </Row>
        <Row justify={"center"}>
          <button type="submit">Donate</button>
        </Row>
      </Card>
    </form>
  );
}
