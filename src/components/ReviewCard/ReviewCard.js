import "./ReviewCard.css";
import { Col, Card, Form } from "react-bootstrap";
import { DateTime } from "luxon";

function ReviewCard({ id, title, content, date, grade, url }) {
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;




  return (
    <Col>
      <Card className="card-main">
        <div className="review-card-header">
          <Card.Text className="date">{date}</Card.Text>
          <Card.Title>{title}</Card.Title>
        </div>
        {/* <Card.Img variant="top" src={url} /> */}
        <div className="review-card-content">
          <Card.Text>{content}</Card.Text>
          <Card.Text className="grade">Grade: {grade}</Card.Text>
        </div>
        <hr/>
        <div className="review-card-comment-section">
        {user ?
        <Form>
          <h3>Comments section:</h3>
          <Form.Group className="mb-3" controlId="formGroupTitle">
            <Form.Control type="text" placeholder="Write something..." className="comment"  />
          </Form.Group>
        </Form>
        :
         <h2>Login to add a comment</h2>
         }
        </div>
      </Card>
    </Col>
  );
}

export default ReviewCard;
