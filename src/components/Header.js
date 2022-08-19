import React from "react";

import { Container, Row, Col } from "react-bootstrap";

// Header component diplays the title of the app in dark background

const Header = () => {
  return (
    <Container fluid className="bg-dark text-light text-center p-2">
      <Row>
        <Col>
          <h1>Rock Paper Scissors Lizard Spock</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Click Play Now to start or Rules for more info</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
