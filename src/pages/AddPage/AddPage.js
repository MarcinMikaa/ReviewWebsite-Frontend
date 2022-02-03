import "./AddPage.css";
import { Form, Button } from "react-bootstrap";

function AddPage() {
  return (
    <div className="add-page">
      <div className="form-box">
        <h1>Add new shoe</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupUsername">
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control type="text" placeholder="Title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control type="date" placeholder="Content" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control type="text" placeholder="Url" />
          </Form.Group>
          <Button>Add</Button>
        </Form>
      </div>
    </div>
  );
}

export default AddPage;
