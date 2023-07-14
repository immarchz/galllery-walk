"use client"
import Image from "next/image";
import {signIn, signOut, useSession} from "next-auth/react"

const LoginButton = () => {

  const {data: session } = useSession();

  if(session && session.user) {
    return (
      <div className="flex flex-wrap justify-center gap-5">
        <div className="flex flex-col pt-5 ">
        <div className='flex text-white'>
        {session.user.name}
        </div>
        <button
      disabled={false}
      type={"button"}
      className="flex flex-row-reverse text-white "
      onClick={()=>signOut()}
      >
        Sign out
      </button>
        </div>
       
        <Image
      src={session.user.image}
      alt=""
      width="100"
      height="100"
      className="flex rounded-full bg-white"
      />
        
      </div>
      
    )
  }
  return (
    <button 
    onClick={()=>signIn()}
    className='text-white'
    >
      Sign In
    </button>
  )
  }
  


export default LoginButton