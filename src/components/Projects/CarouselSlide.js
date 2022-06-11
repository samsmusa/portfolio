import Carousel from 'react-bootstrap/Carousel';

function CarouselSlide({images}) {
  return (
    <Carousel>
      {images?.map(e=><Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={e?.img}
          alt={e?.alt}
        />
      </Carousel.Item>)}
      
    </Carousel>
  );
}

export default CarouselSlide;