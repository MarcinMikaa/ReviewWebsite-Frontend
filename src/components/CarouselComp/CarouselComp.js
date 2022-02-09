import "./CarouselComp.css";
import { Carousel } from "react-bootstrap";
import kot from "../../images/kot.jpeg";
import kot2 from "../../images/kot2.jpeg";

function CarouselComp() {
    return (
      <div className="carousel-comp">
        <Carousel>
        <Carousel.Item>
          <img className="carousel-image" src={kot} alt="First slide"/>
          <Carousel.Caption>
            <h2 className="carousel-header">First slide</h2>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={kot2} alt="Second slide"/>
          <Carousel.Caption>
            <h2 className="carousel-header">Second slide</h2>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={kot} alt="Third slide"/>
          <Carousel.Caption>
            <h2 className="carousel-header">Third slide</h2>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
  
export default CarouselComp;