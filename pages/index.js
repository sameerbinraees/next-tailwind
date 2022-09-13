import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

export default function Home() {
  // TODO: convert this to urls and get static props like about page
  const slides = [
    { url: '/img3.png', key: 2, legend: 'Play with pride!' },
    { url: '/img1.png', key: 1, legend: 'Wear with pride!' },
    { url: '/img2.png', key: 2, legend: 'More than a team, a family!' },
    {
      url: '/img4.png',
      key: 2,
      legend: `Practice like you have never won, Play like you have never lost!`,
    },
  ];

  return (
    <Carousel
      infiniteLoop={true}
      autoPlay={true}
      showStatus={false}
      showArrows={true}
      showThumbs={false}
      stopOnHover={true}
      swipeable={true}
    >
      {slides.map((slide) => (
        <div key={slide.key}>
          <img src={slide.url} alt='artimg-1' width={500} height={500} />
          <p className='legend'>{slide.legend}</p>
        </div>
      ))}
    </Carousel>
  );
}
