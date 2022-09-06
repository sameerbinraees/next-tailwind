import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/sports-logo-transparent.png';
export default function Header(params) {
  return (
    <nav className='flex items-center justify-between bg-nav pr-6 pl-6 lg:bg-green-500 sticky top-0 z-50'>
      <div className='pr-6 pl-6'>
        <Link href='/'>
          <a>
            <button className='transition ease-in-out duration-300 hover:-translate-y-1'>
              <Image src={logo} alt='logo' width={100} height={100} />
            </button>
          </a>
        </Link>
      </div>
      <div className='hidden md:block'>
        <h1 className='text-2xl transition ease-in-out duration-300 hover:-translate-y-1'>
          Go Fight for it team
        </h1>
      </div>
      <div className='hidden w-2/5 md:block'>
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
      <div className='block md:hidden'>
        <button className='rounded-full'>
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
    </nav>
  );
}
