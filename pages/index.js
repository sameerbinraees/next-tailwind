import React from 'react';
import { Carousel } from 'react-responsive-carousel';
// import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
// import AutoHeight from 'embla-carousel-auto-height';

const fetchData = async () => [
  { url: 'https://i.postimg.cc/ncFrSQvk/img3.png', key: 2, legend: 'Play with pride!' },
  { url: 'https://i.postimg.cc/NF4Mfgwm/img1.png', key: 1, legend: 'Wear with pride!' },
  {
    url: 'https://i.postimg.cc/XNcXggyq/img2.png',
    key: 2,
    legend: 'More than a team, a family!',
  },
  {
    url: 'https://i.postimg.cc/xT6CwT5S/img4.png',
    key: 2,
    legend: `Practice like you have never won, Play like you have never lost!`,
  },
];

export default function Home({ slides }) {
  // TODO: convert this to get static props like about page
  // const options = { destroyHeight: 'auto' }; // Options

  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(), AutoHeight(options)]);

  // const scrollPrev = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollPrev();
  // }, [emblaApi]);

  // const scrollNext = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollNext();
  // }, [emblaApi]);

  return (
    <>
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
            <img src={slide.url} alt={`Image ${slide.key}`} />
            <p className='legend'>{slide.legend}</p>
          </div>
        ))}
      </Carousel>
      {
      // TODO
        /* <div>
        <h1>Introduce the team here</h1>
        <div className='embla' ref={emblaRef}>
          <div className='embla__container'>
            {slides.map((slide) => (
              <div key={slide.key} className='embla__slide'>
                <img src={slide.url} alt={`Image ${slide.key}`} />
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
}

export async function getStaticProps() {
  const slides = await fetchData();
  return {
    props: {
      slides,
    },
  };
}
