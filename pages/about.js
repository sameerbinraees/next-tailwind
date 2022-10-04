import ParallaxImage from '../components/Parallax-Image';

const fetchData = async () => [
  {
    imageUrl: 'https://i.postimg.cc/V6wmS3gR/basketball-on-pitch.jpg',
    text: 'Who We Are',
    type: 'about',
  },
  { imageUrl: 'https://i.postimg.cc/J048xZ9H/tree.jpg', text: 'Our Values', type: 'values' },
  { imageUrl: 'https://i.postimg.cc/vTqsNDsq/hoop.jpg', text: 'Our Slogan', type: 'slogan' },
];

export default function About({ data }) {
  return (
    <div>
      {data.map((el, i) => {
        return (
          <ParallaxImage
            text={el.text}
            imageUrl={el.imageUrl}
            type={el.type}
            key={`${el.text}-${i}`}
          />
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetchData();
  return {
    props: {
      data,
    },
  };
}
