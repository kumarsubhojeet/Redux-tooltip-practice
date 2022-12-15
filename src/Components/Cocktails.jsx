import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Cocktails({ cocktails }) {
  return (
    <>
    <div className="container">
    <Container fluid>
      <Row>
        {cocktails.map((item) => (
          <>
          <Col >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.strDrinkThumb} />
              <Card.Body>
                <Card.Title>{item.strGlass}</Card.Title>
                <Card.Text>{item.strInstructions}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card></Col>
          </>
        ))}
      </Row>
    </Container>
    </div>
    </>
  );
}
