import Image from 'next/future/image';

export default function Tournament(params) {
  return (
    <>
      {/* <img src='https://i.postimg.cc/br8rhZ4q/big-tournament-soming-soon.png'
    alt='tournament'/> */}
      <div className='flex'>
        <div className=''>
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
        </div>
      </div>
    </>
  );
}
