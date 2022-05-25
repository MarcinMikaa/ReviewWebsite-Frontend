import "./CarouselComp.css";
import { Carousel } from "react-bootstrap";
import mountain from "../../images/avengers.jpg";
import mountain2 from "../../images/pitbull.jpg";
import mountain3 from "../../images/auta.jpg";

function CarouselComp() {
  return (
    <div className="carousel-comp">
      <Carousel>
        <Carousel.Item>
          <img className="carousel-image" src={mountain} alt="First slide" />
          <Carousel.Caption>
            <h2 className="carousel-header"></h2>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={mountain2} alt="Second slide" />
          <Carousel.Caption>
            <h2 className="carousel-header"></h2>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={mountain3} alt="Third slide" />
          <Carousel.Caption>
            <h2 className="carousel-header"></h2>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComp;
