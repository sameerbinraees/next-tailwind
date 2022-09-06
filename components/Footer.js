export default function Footer(params) {
  // Todo make responsive and stick to the bottom
  return (
    <div className='bg-footer inset-x-0 bottom-0 pt-8 pb-8'>
      <div className='flex justify-around'>
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

        <div>
          <div className='flex flex-col items-center'>
            <p className='text-2xl'>Connect</p>
            <br />
            <br />
            <span>facebook instagram twitter</span>
          </div>
        </div>
      </div>
    </div>
  );
}
