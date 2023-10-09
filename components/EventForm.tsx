"use client";

import { User } from "@prisma/client";
import { toast } from "react-toastify";
import InputImage from "./InputImage";
import { uploadImage } from "@/utils/upload_image";
import {
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Select,
  TimePicker,
  Upload,
  message,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import type { DatePickerProps, TimePickerProps } from "antd";
import Image from "next/image";
import { InboxOutlined, SyncOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
// import { name } from "./../.next/server/app/EventsList/page";

export default function EventForm({
  user,
  event,
  create,
}: {
  user: User;
  event: any;
  create?: boolean;
}) {
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

    toast.promise(
      fetch("/api/event", {
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

  const [form] = Form.useForm();

  const config = {
    rules: [
      {
        type: "object" as const,
        required: true,
        message: "Please select time!",
      },
    ],
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
    // <div className="mx-10">
    //   <Form form={form} autoComplete="off" onFinish={onFinish}>
    //     <Row justify={"center"} gutter={[24, 24]} className="">
    //       <Col xs={24} xl={8}>
    //         <Card
    //           className="text-white"
    //           style={{
    //             width: "100%",
    //             height: 1051,
    //             backgroundColor: "#1E1E1E",
    //             border: "none",
    //           }}
    //         >
    //           <Row justify={"start"}>
    //             <Col xs={24} xl={24}>
    //               <div className="mx-8 my-5 ">
    //                 <Row className="my-4" justify={"start"}>
    //                   <Col span={12}>Title</Col>
    //                 </Row>
    //                 <Row gutter={[24, 24]}>
    //                   <Col span={24}>
    //                     <Form.Item
    //                       name="title"
    //                       rules={[
    //                         {
    //                           required: true,
    //                           message: "Please input your Project Title!",
    //                         },
    //                       ]}
    //                     >
    //                       <Input
    //                         style={{
    //                           width: "100%",
    //                           height: 32,
    //                           backgroundColor: "#1E1E1E",
    //                           borderRadius: "6px",
    //                         }}
    //                       />
    //                     </Form.Item>
    //                   </Col>
    //                 </Row>
    //                 <Row className="mb-4" justify={"start"}>
    //                   <Col span={12}>Description</Col>
    //                 </Row>
    //                 <Row gutter={[24, 24]}>
    //                   <Col span={24}>
    //                     <Form.Item
    //                       name="description"
    //                       rules={[
    //                         {
    //                           required: true,
    //                           message: "Please input your Project Description!",
    //                         },
    //                       ]}
    //                     >
    //                       <TextArea
    //                         style={{
    //                           width: "100%",
    //                           height: 106,
    //                           backgroundColor: "#1E1E1E",
    //                           borderRadius: "6px",
    //                           verticalAlign: "top",
    //                           textAlign: "left",
    //                         }}
    //                       />
    //                     </Form.Item>
    //                   </Col>
    //                 </Row>
    //                 <Row className="" justify={"start"}>
    //                   <Col span={11}>
    //                     <Row className="mb-3">Event Start</Row>
    //                     <Form.Item name="event_start" {...config}>
    //                       <Row>
    //                         <DatePicker
    //                           onChange={onChange}
    //                           style={{ width: "100%" }}
    //                         />
    //                       </Row>
    //                     </Form.Item>
    //                   </Col>
    //                   <Col span={2}></Col>
    //                   <Col span={11}>
    //                     <Row className="mb-3">Event End</Row>
    //                     <Form.Item name="event_end" {...config}>
    //                       <Row>
    //                         <DatePicker
    //                           onChange={onChange}
    //                           style={{ width: "100%" }}
    //                         />
    //                       </Row>
    //                     </Form.Item>
    //                   </Col>
    //                 </Row>

    //                 <Row className="mb-2" justify={"start"}>
    //                   <Col span={11}>
    //                     <Row className="mb-3">Start time</Row>
    //                     <Form.Item name="event_start" {...config}>
    //                       <Row>
    //                         <TimePicker style={{ width: "100%" }} />
    //                       </Row>
    //                     </Form.Item>
    //                   </Col>
    //                   <Col span={2}></Col>
    //                   <Col span={11}>
    //                     <Row className="mb-3">End time</Row>
    //                     <Form.Item name="event_end" {...config}>
    //                       <Row>
    //                         <TimePicker style={{ width: "100%" }} />
    //                       </Row>
    //                     </Form.Item>
    //                   </Col>
    //                 </Row>

    //                 <Row className="mb-4" justify={"start"}>
    //                   <Col span={12}>Upload Photo</Col>
    //                 </Row>
    //                 <Row gutter={[24, 24]}>
    //                   <Col span={24}>
    //                     <Form.Item name="image">
    //                       <Dragger {...props}>
    //                         <p className="ant-upload-drag-icon">
    //                           <InboxOutlined />
    //                         </p>
    //                         <p className="text-white">
    //                           Click or drag file to this area to upload
    //                         </p>
    //                         <p className="text-white">
    //                           Support for a single or bulk upload. Strictly
    //                           prohibited from uploading company data or other
    //                           banned files.
    //                         </p>
    //                       </Dragger>
    //                     </Form.Item>
    //                   </Col>
    //                 </Row>
    //               </div>
    //             </Col>
    //           </Row>
    //         </Card>
    //       </Col>
    //       <Col xs={24} xl={8}>
    //         <Card
    //           className="text-white "
    //           style={{
    //             width: "100%",
    //             height: 1051,
    //             backgroundColor: "#1E1E1E",
    //             border: "none",
    //           }}
    //         >
    //           <Row justify={"start"}>
    //             <Col xs={24} xl={24}>
    //               <div className="mx-8 my-5 ">
    //                 <Row className="my-4" justify={"start"}>
    //                   <Col span={12}>Organizer</Col>
    //                 </Row>
    //                 <Row gutter={[24, 24]}>
    //                   <Col span={24}>
    //                     <Form.Item name="organizer">
    //                       <Input
    //                         style={{
    //                           width: "100%",
    //                           height: 30,
    //                           backgroundColor: "#1E1E1E",
    //                           borderRadius: "6px",
    //                         }}
    //                       />
    //                     </Form.Item>
    //                   </Col>
    //                 </Row>

    //                 <Row className="mb-4" justify={"start"}>
    //                   <Col span={12}>Invitation Code</Col>
    //                 </Row>
    //                 <Row gutter={[24, 24]}>
    //                   <Col span={20}>
    //                     <Form.Item name="link">
    //                       <Input
    //                         addonAfter={
    //                           <Button
    //                             type="primary"
    //                             style={{ backgroundColor: "#1E1E1E" }}
    //                           >
    //                             Copy
    //                           </Button>
    //                         }
    //                         style={{
    //                           width: "100%",
    //                           height: 30,
    //                           backgroundColor: "#1E1E1E",

    //                           borderRadius: "6px",
    //                         }}
    //                       />
    //                     </Form.Item>
    //                   </Col>
    //                   <Col span={4}>
    //                     <Button
    //                       style={styles.centeredButton}
    //                       icon={<SyncOutlined />}
    //                     />
    //                   </Col>
    //                 </Row>

    //                 <Row justify={"center"}>
    //                   <Form.Item>
    //                     <Button
    //                       style={{ backgroundColor: "white", color: " black" }}
    //                       htmlType="submit"
    //                       type="primary"
    //                     >
    //                       Submit
    //                     </Button>
    //                   </Form.Item>
    //                 </Row>
    //               </div>
    //             </Col>
    //           </Row>
    //         </Card>
    //       </Col>
    //     </Row>
    //   </Form>
    // </div>
  );
}
