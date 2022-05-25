import "./CarouselComp.css";
import { Carousel } from "react-bootstrap";
import mountain from "../../images/baner-uno.png";
import mountain2 from "../../images/baner-dos.png";
import mountain3 from "../../images/baner-tres.png";

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
