import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/sports-logo-transparent.png';
export default function Header(params) {
  const [menu, showMenu] = useState(false);
  return (
    <nav className='bg-fuchsia-900 '>
      <div
        className='flex items-center justify-between bg-nav pr-6 pl-6 '
        style={{ color: 'white' }}
      >
        <div className='pr-6 md:pl-6'>
          <Link href='/'>
            <a>
              <button className='transition ease-in-out duration-300 hover:-translate-y-1'>
                <Image src={logo} alt='logo' width={100} height={100} />
              </button>
            </a>
          </Link>
        </div>
        <div className='hidden sm:block'>
          <h1 className='text-2xl transition ease-in-out duration-300 hover:-translate-y-1'>
            Go Fight for it team
          </h1>
        </div>
        <div className='hidden w-2/5 navWidth:block'>
          <div className='inline-flex w-full justify-around'>
            <div className='transition ease-in-out duration-300 hover:-translate-y-1'>
              <Link href='/'>Home</Link>
            </div>
            <div className='transition ease-in-out duration-300 hover:-translate-y-1'>
              <Link href='/about'>About Us</Link>
            </div>
            <div className='transition ease-in-out duration-300 hover:-translate-y-1'>
              <Link href='/tournament'>Tournament</Link>
            </div>
            <div className='transition ease-in-out duration-300 hover:-translate-y-1'>
              <Link href='/team'>Team</Link>
            </div>
            <div className='transition ease-in-out duration-300 hover:-translate-y-1'>
              <Link href='/video'>Video</Link>
            </div>
            <div className='transition ease-in-out duration-300 hover:-translate-y-1'>
              <Link href='/faq'>FAQ</Link>
            </div>
            <div className='transition ease-in-out duration-300 hover:-translate-y-1'>
              <Link href='/contact'>Contact Us</Link>
            </div>
          </div>
        </div>
        <div className='block navWidth:hidden'>
          <div id='dropdown-wrapper' className='inline-block'>
            {/* <button className='px-10 py-3 bg-amber-500 hover:bg-amber-600 focus:bg-rose-500 text-white'>
            Toggle Menu
          </button> */}
            <button
              className='rounded-full'
              onClick={() => {
                showMenu(!menu);
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {menu && (
        <div className='block navWidth:hidden z-50'>
          <div div id='menu' className=' flex flex-col bg-red drop-shadow-md bg-footer '>
            <Link href='/'>
              <a
                onClick={() => {
                  showMenu(!menu);
                }}
                className='px-5 py-3  border-b border-gray-200'
                href='#'
              >
                Home
              </a>
            </Link>
            <Link href='/about'>
              <a
                onClick={() => {
                  showMenu(!menu);
                }}
                className='px-5 py-3  border-b border-gray-200'
              >
                About Us
              </a>
            </Link>
            <Link href='/tournament'>
              <a
                onClick={() => {
                  showMenu(!menu);
                }}
                className='px-5 py-3  border-b border-gray-200'
              >
                Tournament
              </a>
            </Link>
            <Link href='/team'>
              <a
                onClick={() => {
                  showMenu(!menu);
                }}
                className='px-5 py-3 border-b border-gray-200'
              >
                Team
              </a>
            </Link>
            <Link href='/video'>
              <a
                onClick={() => {
                  showMenu(!menu);
                }}
                className='px-5 py-3 border-b border-gray-200'
              >
                Video
              </a>
            </Link>
            <Link href='/faq'>
              <a
                onClick={() => {
                  showMenu(!menu);
                }}
                className='px-5 py-3 border-b border-gray-200'
              >
                FAQ
              </a>
            </Link>
            <Link href='/contact'>
              <a
                onClick={() => {
                  showMenu(!menu);
                }}
                className='px-5 py-3 border-b border-gray-200'
                href='#'
              >
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
