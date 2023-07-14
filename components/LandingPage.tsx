import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      <div className="flex flex-col  my-auto items-center bgimg bg-cover bg-black text-white">
        <div className="flex flex-row gap-8">
          <div className="flex text-white items-center">
            <button>
              <Image src="/leftarrow.svg" alt="" width={50} height={50}></Image>
            </button>
          </div>
          <div className="flex text-white items-center">
            <Link href="/">
              <Image
                src="/Eventpic.svg"
                alt="Event Pic"
                width={800}
                height={800}
              />
            </Link>
          </div>
          <div className="flex text-white items-center">
            <button>
              <Image
                src="/rightarrow.svg"
                alt=""
                width={50}
                height={50}
              ></Image>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4 bg-black text-white">
        <div className="col-start-2 col-span-2 p-4 xl:text-[24px]">
          Overview
        </div>
      </div>
      <div className="grid grid-cols-5 gap-10  bg-black text-white">
        <div className="col-start-2 col-span-1 p-4 justify-center ">
          <Link href="/">
            <Image
              src="/topLeft.svg"
              alt="test pic"
              width={330}
              height={300}
            ></Image>
          </Link>
          <h1 className="mt-5 xl:text-[20px]">
            The World of Studio Ghibil's Animation Central World
          </h1>
          <p className="text-gray">Mon Jul 17,7:00 PM</p>
          <p className="text-gray">Chiangmai</p>
          <p className="text-gray">200 Baht</p>
        </div>
        <div className="col-start-3 col-span-1 p-4 justify-center">
          <Link href="/">
            <Image
              src="/topMid.svg"
              alt="test pic"
              width={330}
              height={300}
            ></Image>
          </Link>
          <h1 className="mt-5 xl:text-[20px]">
            The World of Studio Ghibil's Animation Central World
          </h1>
          <p className="text-gray">Mon Jul 17,7:00 PM</p>
          <p className="text-gray">Chiangmai</p>
          <p className="text-gray">200 Baht</p>
        </div>
        <div className="col-start-4 col-span-1 p-4  justify-center">
          <Link href="/">
            <Image
              src="/topRight.svg"
              alt="test pic"
              width={330}
              height={300}
            ></Image>
          </Link>
          <h1 className="mt-5 xl:text-[20px]">
            The World of Studio Ghibil's Animation Central World
          </h1>
          <p className="text-gray">Mon Jul 17,7:00 PM</p>
          <p className="text-gray">Chiangmai</p>
          <p className="text-gray">200 Baht</p>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-10  bg-black text-white">
        <div className="col-start-2 col-span-1 p-4 justify-center ">
          <Link href="/">
            <Image
              src="/bottomLeft.svg"
              alt="test pic"
              width={330}
              height={300}
            ></Image>
          </Link>
          <h1 className="mt-5 xl:text-[20px]">
            The World of Studio Ghibil's Animation Central World
          </h1>
          <p className="text-gray">Mon Jul 17,7:00 PM</p>
          <p className="text-gray">Chiangmai</p>
          <p className="text-gray">200 Baht</p>
        </div>
        <div className="col-start-3 col-span-1 p-4 justify-center">
          <Link href="/">
            <Image
              src="/bottomMid.svg"
              alt="test pic"
              width={330}
              height={300}
            ></Image>
          </Link>
          <h1 className="mt-5 xl:text-[20px]">
            The World of Studio Ghibil's Animation Central World
          </h1>
          <p className="text-gray">Mon Jul 17,7:00 PM</p>
          <p className="text-gray">Chiangmai</p>
          <p className="text-gray">200 Baht</p>
        </div>
        <div className="col-start-4 col-span-1 p-4  justify-center">
          <Link href="/">
            <Image
              src="/bottomRight.svg"
              alt="test pic"
              width={330}
              height={300}
            ></Image>
          </Link>
          <h1 className="mt-5 xl:text-[20px]">
            The World of Studio Ghibil's Animation Central World
          </h1>
          <p className="text-gray">Mon Jul 17,7:00 PM</p>
          <p className="text-gray">Chiangmai</p>
          <p className="text-gray">200 Baht</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
