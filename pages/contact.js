export default function Contact(params) {
  return (
    <div className='bg-slate-200  text-black '>
      <div className='flex flex-col items-center mt-10 mb-10 justify-around p-5'>
        <h1>Contact Us</h1>
        <h3>We love to hear from our fans!</h3>
        <h5>Our fanbase is what motivates us, you are our real pride, let&apos;s hear from you.</h5>
        <div className='flex flex-wrap justify-around mt-10 w-full items-center	'>
          <div className=' ml-[5%] mr-[5%] flex flex-col grow '>
            <form className='w-full'>
              <div className='flex flex-col items-start	 md:items-center mb-6'>
                <div className='w-full	'>
                  <label className='block text-gray-500 font-bold mb-3 ml-2'>Full Name</label>
                </div>
                <div className='w-full	'>
                  <input
                    className='bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-fuchsia-900'
                    id='inline-full-name'
                    type='text'
                    placeholder='Full Name'
                    value=''
                  />
                </div>
              </div>
              <div className='flex flex-col items-start	 md:items-center mb-6'>
                <div className='w-full	'>
                  <label className='block text-gray-500 font-bold mb-3 ml-2'>Email</label>
                </div>
                <div className='w-full	'>
                  <input
                    className='bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-fuchsia-900'
                    id='inline-full-name'
                    type='text'
                    placeholder='Email'
                    value=''
                  />
                </div>
              </div>

              <div className='flex flex-col items-start	 md:items-center mb-6'>
                <div className='w-full	'>
                  <label className='block text-gray-500 font-bold mb-3 ml-2'>Description</label>
                </div>
                <div className='w-full	'>
                  <textarea
                    className='bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-fuchsia-900'
                    id='inline-full-name'
                    type='text'
                    placeholder='Description'
                    value=''
                    rows='4'
                  />
                </div>
              </div>

              {/* <div className='md:flex md:items-center mb-6'>
                <div className='md:w-1/3'></div>
                <label className='md:w-2/3 block text-gray-500 font-bold'>
                  <input className='mr-2 leading-tight' type='checkbox' />
                  <span className='text-sm'>Send me your newsletter!</span>
                </label>
              </div> */}
              <div className='flex items-center justify-center'>
                <div className=''>
                  <button
                    className='shadow bg-fuchsia-900 hover:bg-fuchsia-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
                    type='button'
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className='m-[5%] flex flex-col grow '>
            <div
              className='flex text-left p-6 rounded-lg border border-gray-200 bg-white shadow-md hover:bg-gray-100 
              dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 duration-200 drop-shadow-xl'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 text-white	'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                />
              </svg>

              <h5 className='ml-[10%] font-normal text-gray-700 dark:text-gray-400'>
                LCO Basketball Ground, Frictional Road
              </h5>
            </div>
            <div
              className='flex text-left p-6 rounded-lg border border-gray-200 bg-white shadow-md hover:bg-gray-100 
              dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 duration-200 drop-shadow-xl'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 text-white'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
                />
              </svg>

              <h5 className='ml-[10%] font-normal text-gray-700 dark:text-gray-400'>
                +91999999999
              </h5>
            </div>
            <div
              className='flex text-left p-6 rounded-lg border border-gray-200 bg-white shadow-md hover:bg-gray-100 
              dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 duration-200 drop-shadow-xl'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 text-white'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                />
              </svg>

              <h5 className='ml-[10%] font-normal text-gray-700 dark:text-gray-400'>
                LCO@FictionalDomain.com
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
