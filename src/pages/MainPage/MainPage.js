import "./MainPage.css";
import { Carousel } from "react-bootstrap";
import kot from "../../images/kot.jpeg";
import kot2 from "../../images/kot2.jpeg";

function MainPage() {
  return (
    <div className="carousel-comp">
      <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={kot} alt="First slide"/>
        <Carousel.Caption>
          <h2>First slide</h2>
          <p>kjdhkdgsafgdjhfdsj</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={kot2} alt="First slide"/>
        <Carousel.Caption>
          <h2>First slide</h2>
          <p>kjdhkdgsafgdjhfdsj</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default MainPage;