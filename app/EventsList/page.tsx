import Link from "next/link";
import Image from "next/image";
import Divider from "@mui/material/Divider";

interface currentEventListInterface {
  linkTo: string;
  img: string;
  description: string;
  eventName: string;
  time: string;
  location: string;
}

interface incommingEventListInterface {
  linkTo: string;
  img: string;
  description: string;
  eventName: string;
  time: string;
  location: string;
}

interface completeEventListInterface {
  linkTo: string;
  img: string;
  description: string;
  eventName: string;
  time: string;
  location: string;
}

const eventArr: currentEventListInterface[] = [
  {
    linkTo: "/SingleEvent",
    img: "/bottomRight.svg",
    description: "test test test test",
    eventName: "World Food Event",
    time: "10:00-11:00",
    location: "Chiangmai",
  },
];

const eventArr2: incommingEventListInterface[] = [
  {
    linkTo: "/SingleEvent",
    img: "/bottomRight.svg",
    description: "",
    eventName: "World Food Event",
    time: "10:00-11:00",
    location: "Chiangmai",
  },
  {
    linkTo: "/SingleEvent",
    img: "/topRight.svg",
    description: "",
    eventName: "World Food Event",
    time: "10:00-11:00",
    location: "Chiangmai",
  },
];

const eventArr3: completeEventListInterface[] = [
  {
    linkTo: "/SingleEvent",
    img: "/bottomRight.svg",
    description: "",
    eventName: "World Food Event",
    time: "10:00-11:00",
    location: "Chiangmai",
  },
  {
    linkTo: "/SingleEvent",
    img: "/topRight.svg",
    description: "",
    eventName: "World Food Event",
    time: "10:00-11:00",
    location: "Chiangmai",
  },
  
  
];

export default function EventsList() {
  const currentEvent = eventArr;
  const incommingEvent = eventArr2;
  const completeEvent = eventArr3;

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-black text-white">
      <div className="flex flex-col overflow-hidden ">
      <h1 className="text-xl"> Current Event </h1>
      <div className="flex flex-col md:flex-row">
      {currentEvent.map((event: currentEventListInterface, index: number) => (
        <div key={index} className="w-full md:w-1/2 px-10  text-white mt-5">
          <div className="flex flex-wrap  ">
            <Link href={event.linkTo}>
              <Image src={event.img} alt="" width={291} height={194} />
            </Link>
            <div className="flex flex-col ml-5">
              <h1 className="text-xl">{event.eventName}</h1>
              <p>{event.time}</p>
              <p>{event.description}</p>
              <p>{event.location}</p>
            </div>
          </div>
        </div>
      ))}
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
                  <div className="flex flex-col ml-5">
                    <h1 className="text-xl">{event.eventName}</h1>
                    <p>{event.time}</p>
                    <p>{event.description}</p>
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
          {completeEvent.map((event:completeEventListInterface, index:number)=>
          <div key={index} className="w-1/2 px-10 text-white mt-5">
          <div className="flex flex-wrap">
            <Link href={event.linkTo}>
              <Image src={event.img} alt="" width={291} height={194} />
            </Link>
            <div className="flex flex-col ml-5">
              <h1 className="text-xl">{event.eventName}</h1>
              <p>{event.time}</p>
              <p>{event.description}</p>
              <p>{event.location}</p>
            </div>
          </div>
        </div>
          )}
        </div>

       

        </div>
    </div>
  );
}
