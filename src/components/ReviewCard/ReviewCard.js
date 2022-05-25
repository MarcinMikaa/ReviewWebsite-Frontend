import "./ReviewCard.css";
import { Col, Card, Form, Button } from "react-bootstrap";
import { useState, useEffect, useCallback } from "react";
import userImg from "../../images/user.png";
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
          <h2>
            <b>Users opinions</b>
          </h2>

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

          {comments.map((comments) => (
            <div key={comments._id} className="user-comment">
              <div className="user-comp">
                <img src={userImg} alt="user" height="40" />
                <h3>{comments.user}</h3>
              </div>
              <p>{comments.content}</p>
            </div>
          ))}
        </div>
      </Card>
    </Col>
  );
}

export default ReviewCard;
