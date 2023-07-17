import Image from "next/image";
import Link from "next/link";

interface EventInterface {
  linkTo:string;
  img:string;
  title:string;
  time:string;
  location:string;
  price:number;
}

interface MainEventInterface {
  linkTo: string;
  img: string;
}

const maineventsArr:MainEventInterface[] = [
  {
    linkTo:"/SingleEvent",
    img:"/Eventpic.svg",
  },
]

const eventArr:EventInterface[] = [
  {
    linkTo:"/",
    img:"/topLeft.svg",
    title:"The World of Studio Ghibil's Animation Central World",
    time:"Mon Jul 17,7:00 PM",
    location:"Chiangmai",
    price:200
  },
  {
    linkTo:"/",
    img:"/topMid.svg",
    title:"The World of Studio Ghibil's Animation Central World",
    time:"Mon Jul 17,7:00 PM",
    location:"Chiangmai",
    price:200
  },
  {
    linkTo:"/",
    img:"/topRight.svg",
    title:"The World of Studio Ghibil's Animation Central World",
    time:"Mon Jul 17,7:00 PM",
    location:"Chiangmai",
    price:200
  },
  {
    linkTo:"/",
    img:"/bottomRight.svg",
    title:"The World of Studio Ghibil's Animation Central World",
    time:"Mon Jul 17,7:00 PM",
    location:"Chiangmai",
    price:200
  },
  {
    linkTo:"/",
    img:"/bottomMid.svg",
    title:"The World of Studio Ghibil's Animation Central World",
    time:"Mon Jul 17,7:00 PM",
    location:"Chiangmai",
    price:200
  },
  {
    linkTo:"/",
    img:"/bottomLeft.svg",
    title:"The World of Studio Ghibil's Animation Central World",
    time:"Mon Jul 17,7:00 PM",
    location:"Chiangmai",
    price:200
  },
]



const LandingPage = () => {

  const showevents = maineventsArr;
  const events = eventArr;
 
  

  return (
    <div>
      <div className="flex flex-col  my-auto items-center  bg-cover bg-black text-white">
        <div className="flex flex-row gap-8">
          <div className="flex text-white items-center">
            <button>
              <Image src="/leftarrow.svg" alt="" width={50} height={50}></Image>
            </button>
          </div>
          {showevents.map((event:MainEventInterface,index:number)=>
          <div key={index} className="flex text-white items-center">
          <Link href={event.linkTo}>
            <Image
              src={event.img}
              alt="Event Pic"
              width={800}
              height={800}
            />
          </Link>
        </div>
          )}
          
          <div className="flex text-white items-center">
            <button>
              <Image
                src="/rightarrow.svg"
                alt=""
                width={50}
                height={50}
              ></Image>
            </button>
          </div >
        </div>
      </div>
     <div className="flex flex-row bg-black py-10 ">
      <p className="text-xl text-white mx-32">Overview</p>
     </div>
      <div className="flex flex-wrap gap-10 justify-center bg-black text-white" >
      
      {events.map((event:EventInterface,index:number) => 
       <div key={index} className="p-4 justify-center w-1/4">
        <Link href={event.linkTo}>
          <Image
            src={event.img}
            alt="test pic"
            width={330}
            height={300}
          ></Image>
        </Link>
        <h1 className="mt-5 xl:text-[20px]">
          {event.title}
        </h1>
        <p className="text-stone-400">{event.time}</p>
        <p className="text-stone-400">{event.location}</p>
        <p className="text-stone-400">{event.price} Baht</p>
      </div>
      )}
      </div>
      
      
      
    </div>
  );
};

export default LandingPage;
