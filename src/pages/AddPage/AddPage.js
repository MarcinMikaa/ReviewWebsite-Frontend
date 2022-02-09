import "./AddPage.css";
import { Form, Button } from "react-bootstrap";
import {useState} from "react";
import axios from "axios";



function AddPage() {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newGrade, setNewGrade] = useState("");
  const [newUrl, setNewUrl] = useState("");

  // test

  const add = () => {
    axios({
      method: "POST",
      data: {
        title: newTitle,
        content: newContent,
        date: newDate,
        grade: newGrade,
        url: newUrl,
      },
      withCredentials: true,
      url: "http://localhost:3000/add-review"
    }).then((res) => {});
  };
  return (
    <div className="add-page">
      <div className="form-box">
        <h1>Add new review</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupTitle">
            <Form.Control type="text" placeholder="Title" />
          </Form.Group>
          <Form.Group className="mb-7" controlId="formGroupContent">
            <Form.Control type="text" placeholder="Content" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupDate">
            <Form.Control type="date" placeholder="Date" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupGrade">
            <Form.Control type="number" placeholder="Grade" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupUrl">
            <Form.Control type="text" placeholder="Url" />
          </Form.Group>
          <Button>Add</Button>
        </Form>
      </div>
    </div>
  );
}

export default AddPage;
