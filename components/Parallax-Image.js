import styles from '../styles/About.module.css';

// TODO: apply good transitions on hover

function GetExtraInfo({ type }) {
  if (type === 'about')
    return (
      <div className='flex flex-col items-center text-center'>
        <div className='p-5 mt-10 mb-10 rounded-lg border border-gray-200 bg-white shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
          <h1 className='leading-10 transition ease-in-out duration-500 hover:-translate-y-1 pb-3'>
            We are the LCO!
          </h1>
          <h3 className='leading-10 transition ease-in-out duration-500 hover:-translate-y-1 pb-3'>
            Find us at LCO Basketball Ground
          </h3>
          <h2 className='leading-10 transition ease-in-out duration-500 hover:-translate-y-1 pb-3'>
            Go fight for it Team
          </h2>
        </div>
      </div>
    );
  if (type === 'values')
    return (
      <div>
        <div
          className=' text-left flex flex-col  m-10 p-6 rounded-lg border border-gray-200 bg-white shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700
        transition ease-in-out duration-500 hover:-translate-y-1'
        >
          <h3 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            #MORE_THAN_A_TEAM
          </h3>
          <h4 className='font-normal text-gray-700 dark:text-gray-400'>
            Here at LCO, we are not just a team, we are more than a team, a family
          </h4>
        </div>
        <div
          className=' text-right flex flex-col  m-10 p-6 rounded-lg border border-gray-200 bg-white shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700
        transition ease-in-out duration-500 hover:-translate-y-1'
        >
          <h3 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            #INTENSITY
          </h3>
          <h4 className='font-normal text-gray-700 dark:text-gray-400'>
            Every game we play is full of intensity, our players giver their 100% on the pitch
          </h4>
        </div>
        <div
          className=' text-left flex flex-col  m-10 p-6 rounded-lg border border-gray-200 bg-white shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700
        transition ease-in-out duration-500 hover:-translate-y-1'
        >
          <h3 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            #I.R.O.N.
          </h3>
          <h4 className='font-normal text-gray-700 dark:text-gray-400'>
            I - Integrity <br /> R - Reliability <br />O - Opportunity <br />N - Never give up
          </h4>
        </div>
      </div>
    );
  if (type === 'slogan')
    return (
      <div
        className='text-center flex flex-col m-10 p-6 rounded-lg border border-gray-200 
        bg-white shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 
        transition ease-in-out duration-500 hover:scale-105'
        // style={{ backgroundColor: 'grey' }}
      >
        <h2 className='mb-2 tracking-tight text-gray-900 dark:text-white'>Go Fight For It Team</h2>
      </div>
    );
}

export default function ParallaxImage({ imageUrl, text, type }) {
  return (
    <div className=' items-center'>
      <div
        className='w-full h-screen bg-fixed bg-cover bg-center flex justify-center items-center opacity-90'
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className='flex flex-col items-center justify-center transition ease-in-out duration-1000 hover:scale-110 '>
          <div>
            <span className={styles.border}>
              <font>{text}</font>
            </span>
          </div>
        </div>
      </div>
      <GetExtraInfo type={type} />
    </div>
  );
}
