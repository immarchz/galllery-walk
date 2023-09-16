"use client";
import Link from "next/link";
import Image from "next/image";
import { Divider,Button } from "antd";
import * as React from "react";
import { TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useSession } from "next-auth/react";

interface currentEventListInterface {
  linkTo: string;
  img: string;
  eventName: string;
  time: string;
  location: string;
}

interface incommingEventListInterface {
  linkTo: string;
  img: string;
  eventName: string;
  time: string;
  location: string;
}

interface completeEventListInterface {
  linkTo: string;
  img: string;
  eventName: string;
  time: string;
  location: string;
}

const eventArr: currentEventListInterface[] = [
  {
    linkTo: "/SingleEvent",
    img: "/ISEKAI.svg",
    eventName: '"ISEKAI"',
    time: "Mon, Jul 20, 7:00 PM",
    location: "Live Nation Tero",
  },
];

const eventArr2: incommingEventListInterface[] = [
  {
    linkTo: "/SingleEvent",
    img: "/xpace.svg",

    eventName: "XSPACE ART HALL V.2 – ENLIVEN",
    time: "Sun, Dec 12, 12:00 PM",
    location: "Xspace Gallery",
  },
  {
    linkTo: "/SingleEvent",
    img: "/ghibil.svg",

    eventName: "The World of Studio Ghibli’s Animation Central World",
    time: "Sat, Dec 23, 7:00 PM",
    location: "Teayii Arts Work",
  },
];

const eventArr3: completeEventListInterface[] = [
  {
    linkTo: "/SingleEvent",
    img: "/futurepark.svg",

    eventName: "FUTURE PARK & ZPELL X BENZILLA",
    time: "Sun, Jan 22, 9:00 PM",
    location: "Benzilla",
  },
  {
    linkTo: "/SingleEvent",
    img: "/whitelephant.svg",

    eventName:
      'The 12th White Elephant Art Fair under the theme "Love the World"',
    time: "Sat, Jan 16, 8:00 PM",
    location: "Charan Panonta",
  },
];

export default function EventsList() {
  const currentEvent = eventArr;
  const incommingEvent = eventArr2;
  const completeEvent = eventArr3;

  const { data: session } = useSession();

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  if (session && session?.user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-cover bg-black text-white">
        <div className="flex flex-col overflow-hidden ">
          <h1 className="text-xl"> Current Event </h1>
          <div className="flex flex-col md:flex-row">
            {currentEvent.map(
              (event: currentEventListInterface, index: number) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 px-10  text-white mt-5"
                >
                  <div className="flex flex-wrap  ">
                    <Link href={event.linkTo}>
                      <Image src={event.img} alt="" width={291} height={194} />
                    </Link>
                    <div className="flex flex-col ml-5">
                      <h1 className="text-[20px]">{event.eventName}</h1>
                      <p className="text-[15px]">{event.time}</p>

                      <p>{event.location}</p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          <Divider className="my-4 h-4  border-white" variant="middle" />

          <h1 className="text-xl">Incomming</h1>
          <div className="flex flex-col md:flex-row">
            {incommingEvent.map(
              (event: incommingEventListInterface, index: number) => (
                <div key={index} className="w-1/2 px-10  text-white mt-5">
                  <div className="flex flex-wrap  ">
                    <Link href={event.linkTo}>
                      <Image src={event.img} alt="" width={291} height={194} />
                    </Link>
                    <div className="flex flex-col ml-5 w-1/2">
                      <h1 className="text-[20px]">{event.eventName}</h1>
                      <p className="text-[15px]">{event.time}</p>

                      <p>{event.location}</p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          <Divider className="my-4 h-4  border-white" variant="middle" />

          <h1 className="text-xl">Complete</h1>
          <div className="flex flex-col md:flex-row">
            {completeEvent.map(
              (event: completeEventListInterface, index: number) => (
                <div key={index} className="w-1/2 px-10 text-white mt-5">
                  <div className="flex flex-wrap">
                    <Link href={event.linkTo}>
                      <Image src={event.img} alt="" width={291} height={194} />
                    </Link>
                    <div className="flex flex-col ml-5 w-1/2">
                      <h1 className="text-[20px]">{event.eventName}</h1>
                      <p className="text-[15px]">{event.time}</p>

                      <p>{event.location}</p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="flex w-full justify-center my-10">
            <Button
              className="my-12 text-black bg-white w-32 hover:bg-white"
              onClick={handleOpen}
            >
              Create Event
            </Button>
            <Modal
              className="flex items-center"
              open={openModal}
              onClose={handleClose}
            >
              <div className="flex w-full justify-center">
                <Box
                  sx={{
                    color: "white",
                    backgroundColor: "#1E1E1E",
                    width: "402px",
                    height: "570px",
                  }}
                >
                  <div className=" flex mx-5 mt-3 flex-row justify-between">
                    <h1>Create Project</h1>
                    <Button onClick={handleClose} className="text-white">
                      X
                    </Button>
                  </div>
                  <div className="flex flex-col mx-5">
                    <h2 className="flex">Title</h2>
                    <div className="flex mt-2 justify-center">
                      <Box
                        component="form"
                        sx={{
                          width: 360,
                          height: 32,
                          border: "1px solid gray",
                          borderRadius: 2,
                          display: "flex",
                          alignItems: "center",
                        }}
                        autoComplete="off"
                      >
                        <TextField
                          fullWidth
                          placeholder="Title"
                          InputProps={{
                            sx: {
                              color: "white",
                              "& fieldset": {
                                border: "none",
                              },
                            },
                          }}
                        />
                      </Box>
                    </div>

                    <h2 className="flex mt-2">Description</h2>
                    <div className="flex mt-2 justify-center">
                      <Box
                        component="form"
                        sx={{
                          width: 360,
                          height: 92,
                          border: "1px solid gray",
                          borderRadius: 2,
                        }}
                        autoComplete="off"
                      >
                        <TextField
                          fullWidth
                          sx={{
                            width: "100%",
                            height: "100%",
                          }}
                          placeholder="Description"
                          InputProps={{
                            sx: {
                              color: "white",
                              "& fieldset": {
                                border: "none",
                              },
                            },
                          }}
                        />
                      </Box>
                    </div>

                    <div className="flex flex-row justify-between mt-2">
                      <h2>Event Start</h2>
                      <h2>Start Time</h2>
                    </div>

                    <div className="flex flex-row mt-2 justify-evenly ">
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          label="Date"
                          sx={{
                            width: "170px",
                            hight: "32px",
                            "& .MuiInputLabel-root": {
                              color: "gray",
                            },
                            "& .MuiSvgIcon-root": {
                              color: "gray",
                            },
                            "& .MuiInputBase-input": {
                              color: "gray",
                            },
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: "gray",
                                transition: "border-color 0.3s ease-in-out",
                              },
                              "&:hover fieldset": {
                                borderColor: "gray",
                              },
                            },
                          }}
                        />
                        <TimePicker
                          label="Time"
                          sx={{
                            width: "170px",
                            hight: "32px",
                            "& .MuiInputLabel-root": {
                              color: "gray",
                            },
                            "& .MuiSvgIcon-root": {
                              color: "gray",
                            },
                            "& .MuiInputBase-input": {
                              color: "gray",
                            },
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: "gray",
                                transition: "border-color 0.3s ease-in-out",
                              },
                              "&:hover fieldset": {
                                borderColor: "gray",
                              },
                            },
                          }}
                        />
                      </LocalizationProvider>
                    </div>

                    <div className="flex flex-row justify-between mt-2">
                      <h2>Event End</h2>
                      <h2>End Time</h2>
                    </div>

                    <div className="flex flex-row mt-2 justify-evenly">
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          label="Date"
                          sx={{
                            width: "170px",
                            hight: "32px",
                            "& .MuiInputLabel-root": {
                              color: "gray",
                            },
                            "& .MuiSvgIcon-root": {
                              color: "gray",
                            },
                            "& .MuiInputBase-input": {
                              color: "gray",
                            },
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: "gray",
                                transition: "border-color 0.3s ease-in-out",
                              },
                              "&:hover fieldset": {
                                borderColor: "gray",
                              },
                            },
                          }}
                        />
                        <TimePicker
                          label="Time"
                          sx={{
                            width: "170px",
                            hight: "32px",
                            "& .MuiInputLabel-root": {
                              color: "gray",
                            },
                            "& .MuiSvgIcon-root": {
                              color: "gray",
                            },
                            "& .MuiInputBase-input": {
                              color: "gray",
                            },
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: "gray",
                                transition: "border-color 0.3s ease-in-out",
                              },
                              "&:hover fieldset": {
                                borderColor: "gray",
                              },
                            },
                          }}
                        />
                      </LocalizationProvider>
                    </div>
                    <h2 className="mt-2">Organizer</h2>
                    <div className="flex mt-2 justify-center">
                      <Box
                        component="form"
                        sx={{
                          width: 360,
                          height: 32,
                          border: "1px solid gray",
                          borderRadius: 2,
                          display: "flex",
                          alignItems: "center",
                        }}
                        autoComplete="off"
                      >
                        <TextField
                          fullWidth
                          placeholder="Title"
                          InputProps={{
                            sx: {
                              color: "white",
                              "& fieldset": {
                                border: "none",
                              },
                            },
                          }}
                        />
                      </Box>
                    </div>
                    <div className="flex w-full justify-center my-3">
                      <Button
                        className="text-black bg-white w-32 hover:bg-white"
                        sx={{
                          borderRadius: 3,
                        }}
                        onClick={handleOpen}
                      >
                        Create Event
                      </Button>
                    </div>
                  </div>
                </Box>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-black text-white">
      <div className="flex flex-col overflow-hidden ">
        <h1 className="text-xl"> Current Event </h1>
        <div className="flex flex-col md:flex-row">
          {currentEvent.map(
            (event: currentEventListInterface, index: number) => (
              <div
                key={index}
                className="w-full md:w-1/2 px-10  text-white mt-5"
              >
                <div className="flex flex-wrap  ">
                  <Link href={event.linkTo}>
                    <Image src={event.img} alt="" width={291} height={194} />
                  </Link>
                  <div className="flex flex-col ml-5">
                    <h1 className="text-[20px]">{event.eventName}</h1>
                    <p className="text-[15px]">{event.time}</p>

                    <p>{event.location}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <Divider className="my-4 h-4  border-white" variant="middle" />

        <h1 className="text-xl">Incomming</h1>
        <div className="flex flex-col md:flex-row">
          {incommingEvent.map(
            (event: incommingEventListInterface, index: number) => (
              <div key={index} className="w-1/2 px-10  text-white mt-5">
                <div className="flex flex-wrap  ">
                  <Link href={event.linkTo}>
                    <Image src={event.img} alt="" width={291} height={194} />
                  </Link>
                  <div className="flex flex-col ml-5 w-1/2">
                    <h1 className="text-[20px]">{event.eventName}</h1>
                    <p className="text-[15px]">{event.time}</p>

                    <p>{event.location}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <Divider className="my-4 h-4  border-white" variant="middle" />

        <h1 className="text-xl">Complete</h1>
        <div className="flex flex-col md:flex-row flex-wrap">
          {completeEvent.map(
            (event: completeEventListInterface, index: number) => (
              <div key={index} className="w-1/2 px-10 text-white mt-5">
                <div className="flex flex-wrap">
                  <Link href={event.linkTo}>
                    <Image src={event.img} alt="" width={291} height={194} />
                  </Link>
                  <div className="flex flex-col ml-5 w-1/2">
                    <h1 className="text-[20px]">{event.eventName}</h1>
                    <p className="text-[15px]">{event.time}</p>

                    <p>{event.location}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
