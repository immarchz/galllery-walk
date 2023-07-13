"use client"

import {signIn, signOut, useSession} from "next-auth/react"

const LoginButton = () => {

  const {data: session } = useSession();

  if(session && session.user) {
    return (
      <>
      <p className='text-white'>{session.user.name}</p>
      <button
      disabled={false}
      type={"button"}
      className="text-white p-4"
      onClick={()=>signOut()}
      >
        Sign out
      </button>
      </>
      
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