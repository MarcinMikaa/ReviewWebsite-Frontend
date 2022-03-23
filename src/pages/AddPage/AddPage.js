import "./AddPage.css";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function AddPage() {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newGrade, setNewGrade] = useState("");
  const [newUrl, setNewUrl] = useState("");

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
      url: "http://localhost:4000/add-review",
    }).then((res) => {});
  };

  return (
    <div className="add-page background">
      <div className="form-box">
        <h1 className="header">Add new review</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupTitle">
            <Form.Control type="text" placeholder="Title" className="place" onChange={(e) => setNewTitle(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupContent">
            <Form.Control type="text" placeholder="Content" className="place" onChange={(e) => setNewContent(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupDate">
            <Form.Control type="date" placeholder="Date" className="place" onChange={(e) => setNewDate(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupGrade">
            <Form.Control type="number" placeholder="Grade" className="place" onChange={(e) => setNewGrade(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupUrl">
            <Form.Control type="text" placeholder="Url" className="place" onChange={(e) => setNewUrl(e.target.value)}/>
          </Form.Group>
          <Button onClick={add}>Add</Button>
        </Form>
      </div>
    </div>
  );
}

export default AddPage;
