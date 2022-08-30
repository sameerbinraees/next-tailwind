export default function Header(params) {
  return (
    <nav className='flex items-center justify-between px-10 py-10'>
      <div>image</div>
      <div>
        <h1>Go Fight for it team</h1>
      </div>
      <div className='inline-flex w-2/5'>
        <ul className='inline-flex w-full justify-around'>
          <li>Home</li>
          <li>About Us</li>
          <li>Tournament</li>
          <li>Team</li>
          <li>Video</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
}
