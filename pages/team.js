import Image from 'next/future/image';

export default function Team(params) {
  const team = [];
  new Array(5).fill(0).forEach((el, i) =>
    team.push(
      <div
        className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 
  transition ease-in-out delay-70 duration-300 hover:-translate-y-2 m-[5%] dark:hover:bg-gray-900'
      >
        <Image
          className=''
          src='https://i.postimg.cc/4NsHC0Tp/artimg-2.png'
          width={600}
          height={600}
          alt=''
        />

        <div className='p-5'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Team Member {i + 1}
            </h5>
          
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          {/* <a
            href='#'
            className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Read more
            <svg
              aria-hidden='true'
              className='ml-2 -mr-1 w-4 h-4'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </a> */}
        </div>
      </div>,
    ),
  );

  return (
    <>
      {/* <img src='https://i.postimg.cc/br8rhZ4q/big-tournament-soming-soon.png'
    alt='tournament'/> */}
      <div className='flex mt-[2%] justify-around flex-wrap'>
        {/* <div className=''>
          <Image
            src='https://i.postimg.cc/br8rhZ4q/big-tournament-soming-soon.png'
            alt='tournament'
            width={600}
            height={600}
            // style={{ width: '100%' }}
          ></Image>
        </div>
        <div className='grow text-center align-middle flex items-center justify-center '>
          <p className=''>Here goes some animated text</p>
        </div> */}

        {/* {team.map((el) => {
          return (
            {el}
          )
        })} */}

        {team}
      </div>
    </>
  );
}
