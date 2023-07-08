import Image from 'next/image'
import Link from 'next/link'
import LoginButton from './LoginButton'

const Navbar = () => {
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
      <button className=''>
      <Image
      src="/earth.svg"
      alt='Change Languages'
      width={25}
      height={25}
      />
      </button>
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
