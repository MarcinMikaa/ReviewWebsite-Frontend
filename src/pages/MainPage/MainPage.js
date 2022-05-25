import "./MainPage.css";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import CarouselComp from "../../components/CarouselComp/CarouselComp";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import axios from "axios";

function MainPage() {
  const [reviews, setReviews] = useState([]);
  // const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/reviews",
    }).then((res) => {
      setReviews(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div className="main-page">
      <CarouselComp />

      <Container className="page-container">
        <h1>REVIEWS</h1>
        {reviews.map((reviews) => (
          <div key={reviews._id}>
            <ReviewCard
              key={reviews._id}
              id={reviews._id}
              title={reviews.title}
              content={reviews.content}
              director={reviews.director}
              scenario={reviews.scenario}
              genre={reviews.genre}
              production={reviews.production}
              date={reviews.date}
              grade={reviews.grade}
              url={reviews.url}
              comments={reviews.comments}
            />
          </div>
        ))}
      </Container>
    </div>
  );
}

export default MainPage;
