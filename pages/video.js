export default function Video(params) {
  return (
    // <div style={{ backgroundColor: '#f2f2f2' }}>
    <div>
      <br />
      <div className='flex justify-center lg:h-[90vh] sm:h-[70vh] xs: h-[40vh]'>
        <iframe
          className='w-11/12 rounded-lg'
          src='https://www.youtube.com/embed/hqvGOPB0KmQ'
          title='video'
        ></iframe>
      </div>
      <br />
    </div>
  );
}
