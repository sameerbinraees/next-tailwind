import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/sports-logo-transparent.png';
export default function Header(params) {
  return (
    <nav className='flex items-center justify-between bg-nav pr-6 pl-6'>
      <div className='pr-6 pl-6'>
        <button className='transition ease-in-out duration-300 hover:-translate-y-1'>
          <Image src={logo} alt='logo' width={100} height={100} />
        </button>
      </div>
      <div>
        <h1>Go Fight for it team</h1>
      </div>
      <div className='inline-flex w-2/5'>
        <div className='inline-flex w-full justify-around'>
          <div className='transition ease-in-out duration-300 hover:-translate-y-1'>
            <Link href='#'>Home</Link>
          </div>
          <div className='transition ease-in-out duration-300 hover:-translate-y-1'>
            <Link href='#'>About Us</Link>
          </div>
          <div className='transition ease-in-out duration-300 hover:-translate-y-1'>
            <Link href='#'>Tournament</Link>
          </div>
          <div className='transition ease-in-out duration-300 hover:-translate-y-1'>
            <Link href='#'>Team</Link>
          </div>
          <div className='transition ease-in-out duration-300 hover:-translate-y-1'>
            <Link href='#'>Video</Link>
          </div>
          <div className='transition ease-in-out duration-300 hover:-translate-y-1'>
            <Link href='#'>FAQ</Link>
          </div>
          <div className='transition ease-in-out duration-300 hover:-translate-y-1'>
            <Link href='#'>Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
