import Image from 'next/image';

export default function Footer(params) {
  // Todo make responsive and stick to the bottom
  return (
    <div className='bg-footer inset-x-0 bottom-0 pt-8 pb-8'>
      <div className='flex flex-col md:flex-row justify-around'>
        <div className='flex flex-col items-center'>
          <p className='text-2xl'>Contact</p>
          <br />
          <p className='text-base'>
            <span className='font-bold'>Phone Number:</span> +92000-0000000
          </p>
          <p className='leading-10 text-base'>
            <span className='font-bold'>Address:</span> LCO Basketball Ground, Frictional Road
          </p>
        </div>
        <br className='md:hidden' />
        <br className='md:hidden' />
        <br className='md:hidden' />

        <div>
          <div className='flex flex-col items-center'>
            <p className='text-2xl'>Connect</p>

            <br />
            <span className='flex justify-between w-150'>
              <a href='https://www.facebook.com/'>
                <Image src='/fb.png' alt='facebook-logo' width={40} height={40} />
              </a>
              <a href='https://www.instagram.com/'>
                <Image src='/insta.png' alt='instagram-logo' width={40} height={40} />
              </a>
              <a href='https://www.twitter.com/'>
                <Image src='/twitter.png' alt='twitter-logo' width={40} height={40} />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
