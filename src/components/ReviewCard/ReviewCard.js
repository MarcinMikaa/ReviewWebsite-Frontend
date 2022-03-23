import "./ReviewCard.css";
import { Col, Card } from "react-bootstrap";

function ReviewCard({ id, title, content, date, grade, url }) {
  // const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

  return (
    <Col>
      <Card className="card-main">
        <div className="review-card-header">
          <div className="date">
            <Card.Text>{date}</Card.Text>
          </div>
          <Card.Title>{title}</Card.Title>
        </div>
        {/* <Card.Img variant="top" src={url} /> */}

        <Card.Body>
          <Card.Text>{content}</Card.Text>
          <Card.Text>{grade}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ReviewCard;
