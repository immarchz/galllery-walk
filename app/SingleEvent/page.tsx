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
    description :"",
    eventName: "World Food Event",
    time : "",
    location :"", 
  },
  {
    linkTo : "/",
    img : "/topMid.svg",
    description :"",
    eventName: "Studio Ghibil",
    time : "",
    location :"", 
  },
]
  
    


export default function EventsList() {

  return (
    <main className="overflow-hidden bg-black">
      
        {eventArr.map((event:eventListInterface,index:number)=>
        
        <div key={index} className='flex text-white mt-5'>
          <div className="flex flex-col-3">
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
            </div>
          </div>
        
      </div>
        )}
    </main>
  )
}
