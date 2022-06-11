import Carousel from 'react-bootstrap/Carousel';

function CarouselSlide({images}) {
  return (
    <Carousel>
      {images?.map(e=><Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
      </Carousel.Item>)}
      
    </Carousel>
  );
}

export default CarouselSlide;