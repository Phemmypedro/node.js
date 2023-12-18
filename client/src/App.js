import { useState } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";

const App = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const emailChangeHandler = (event) => {
    return setEmail(event.target.value);
  };

  const messageChangeHandler = (event) => {
    return setMessage(event.target.value);
  };

  const sendEmail = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    if (!message || !email) {
      setIsLoading(false);
      return setErrorMessage("all input fields are required");
    }
    try {
      const response = await fetch("http://localhost:5000/email/send", {
        method: "POST",
        body: JSON.stringify({ email, message }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        setIsLoading(false);
        return setErrorMessage(data.error);
      }

      return setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      return setErrorMessage("something went wrong");
    }
  };

  return (
    <Container>
      <Row>
        <Col lg={3}></Col>
        <Col lg={6}>
          {errorMessage && <h1 style={{ color: "#333" }}>{errorMessage}</h1>}

          <div className="mt-5">
            <Form onSubmit={sendEmail}>
              <Form.Group className="mb-3">
                <Form.Control
                  placeholder="Email"
                  onChange={emailChangeHandler}
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  placeholder="message"
                  onChange={messageChangeHandler}
                />
              </Form.Group>

              <Button type="submit" style={{ width: "100%" }} className="mt-3">
                {isLoading ? "please wait..." : "Send"}
              </Button>
            </Form>
          </div>
        </Col>
        <Col lg={3}></Col>
      </Row>
    </Container>
  );
};

export default App;
