"use client"
import Image from 'next/image'
import Link from 'next/link'
import LoginButton from './LoginButton'
import React from 'react'
import { useState } from 'react'

const Navbar = () => {

  const [showModal,setShowModal] = useState(false);

  return (
    <header className='w-full z-10 bg-black'>
      <nav className='max-w-[1440px] mx-auto
      flex justify-between items-center
      sm:px-16 px-6 py-4'>
        <div className='flex flex-row gap-8'>
        <div className="flex text-white items-center">
        <Link
        href="/"
        className='flex justify-center items-center'
        >
          <Image
          src="/Logo.svg"
          alt='Gallery Walk Logo'
          width="118"
          height="100"
          className='object-contain'
          />
        </Link>
        </div>
        <div className="flex text-white items-center">
          <Link
          href="/"
          >
          Home
          </Link>
        </div>
        <div className="flex text-white items-center">
          <Link
          href="/EventsList"
          >
          Events
          </Link>
        </div>
        </div>
        
      
      
      <div className='flex flex-row gap-8'>
      
      <div className="flex text-white items-center">
      <LoginButton/>
      </div>
      </div>
      </nav>
    </header>
  )
}

export default Navbar
