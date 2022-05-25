import "./ReviewCard.css";
import { Col, Card, Form, Button } from "react-bootstrap";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function ReviewCard({ id, title, content, date, grade, url, comments }) {
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

  const [newContent, setNewContent] = useState("");

  const add = () => {
    axios({
      method: "POST",
      data: {
        id_review: id,
        user: user.username,
        content: newContent,
      },
      withCredentials: true,
      url: "http://localhost:4000/add-comment",
    }).then((res) => {});
  };

  const formatDate = useCallback((date) => {
    try {
      return new Intl.DateTimeFormat("pl-PL").format(new Date(date).getTime());
    } catch (e) {
      return date;
    }
  }, []);

  return (
    <Col>
      <Card className="card-main">
        <div className="review-card-header">
          <Card.Text className="date">{formatDate(date)}</Card.Text>
          <Card.Title>{title}</Card.Title>
        </div>
        {/* <Card.Img variant="top" src={url} /> */}
        <div className="review-card-content">
          <Card.Text>{content}</Card.Text>
          <Card.Text className="grade">Grade: {grade}</Card.Text>
        </div>
        <hr />
        <div className="review-card-comment-section">
          <h3>Comments section</h3>

          {comments.map((comments) => (
            <div key={comments._id}>
              <h3>{comments.user}</h3>
              <p>{comments.content}</p>
            </div>
          ))}

          {user ? (
            <Form>
              <Form.Group className="mb-3" controlId="formGroupTitle">
                <Form.Control
                  type="text"
                  placeholder="Write something..."
                  className="comment"
                  onChange={(e) => setNewContent(e.target.value)}
                />
              </Form.Group>
              <Button onClick={add}>Add</Button>
            </Form>
          ) : (
            <h2>Login to add a comment</h2>
          )}
        </div>
      </Card>
    </Col>
  );
}

export default ReviewCard;
