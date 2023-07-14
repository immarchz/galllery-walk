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
          href="/"
          >
          Event
          </Link>
        </div>
        </div>
        
      
      
      <div className='flex flex-row gap-8'>
      <div className="flex text-white items-center">
      <button className=''
      onClick={()=>setShowModal(true)}
      >
      <Image
      src="/earth.svg"
      alt='Change Languages'
      width={25}
      height={25}
      />
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Test 1234 <br></br> 
                    test 0000
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      </div>
      <div className="flex text-white items-center">
      <LoginButton
        />
      </div>
      </div>
      </nav>
    </header>
  )
}

export default Navbar
