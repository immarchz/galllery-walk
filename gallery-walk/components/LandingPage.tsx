import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen my-auto items-center bgimg bg-cover bg-black">
      <div className="flex flex-row gap-8">
        <div className="flex text-white items-center">
          <Image
          src="/leftarrow.svg"
          alt=""
          width={50}
          height={50}
          ></Image>
        </div>
        <div className="flex text-white items-center">
        <Link href="/">
          <Image src="/Eventpic.svg" alt="Event Pic" width={800} height={800} />
        </Link>
        </div>
        <div className="flex text-white items-center">
          <Image
          src="/rightarrow.svg"
          alt=""
          width={50}
          height={50}
          ></Image>
        </div>
      </div>
      
    </div>
  );
};

export default LandingPage;
