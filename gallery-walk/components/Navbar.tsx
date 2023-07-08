import Image from 'next/image'
import Link from 'next/link'
import LoginButton from './LoginButton'

const Navbar = () => {
  return (
    <header className='w-full z-10 bg-black'>
      <nav className='max-w-[1440px] mx-auto
      flex justify-between items-center
      sm:px-16 px-6 py-4'>
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
      <div>
        <LoginButton
        />
      </div>
          

         
      </nav>
    </header>
  )
}

export default Navbar
