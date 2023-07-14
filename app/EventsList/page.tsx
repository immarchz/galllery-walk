import Link from "next/link"
import Image from 'next/image'

interface eventListInterface {
  linkTo : string;
  img : string;
  description : string;
  eventName : string;
  time : string;
  location : string;
}

const eventArr:eventListInterface[]= [
  {
    linkTo : "/",
    img : "/bottomRight.svg",
    description :"test test test test",
    eventName: "World Food Event",
    time : "10:00-11:00",
    location :"Chiangmai", 
  },
  {
    linkTo : "/",
    img : "/bottomRight.svg",
    description :"test test test test",
    eventName: "Studio Ghibil",
    time : "9:30 - 11:00",
    location :"Chiangmai", 
  },
  {
    linkTo : "/",
    img : "/bottomRight.svg",
    description :"test test test test",
    eventName: "Studio Ghibil",
    time : "9:30 - 11:00",
    location :"Chiangmai", 
  },  
  
]
  
    


export default function EventsList() {

  return (
    <main className="overflow-hidden bg-black">
      
        {eventArr.map((event:eventListInterface,index:number)=>
        
        <div key={index} className='flex flex-col-2 text-white mt-5'>
          <div className="flex flex-wrap items-center ">
          <Link
        href={event.linkTo}>
          <Image
          src={event.img}
          alt=""
          width={300}
          height={300}
          />
            </Link>
            <div className="flex flex-col ml-5">
            <h1 className="text-xl">{event.eventName}</h1>
            <p>{event.description}</p>
            <p>{event.time}</p>
            <p>{event.location}</p>
            </div>
          </div>
        
      </div>
        )}
    </main>
  )
}
