import "./AddPage.css";
import { Form, Button } from "react-bootstrap";



function AddPage() {

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
