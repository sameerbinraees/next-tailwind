export default function Footer(params) {
  return (
    <div className='bg-footer absolute inset-x-0 bottom-0 pt-8 pb-8'>
      <div className='flex justify-around'>
        <div className='flex flex-col items-center'>
          <p>Contact</p>
          <br />
          <p>Phone Number: +92000-0000000</p>
          <p className='leading-10'>Address: LCO Basketball Ground, Frictional Road</p>
        </div>

        <div>
          <div className='flex flex-col items-center'>
            <p>Connect</p>
            <br />
            <br />
            <span>facebook instagram twitter</span>
          </div>
        </div>
      </div>
    </div>
  );
}
