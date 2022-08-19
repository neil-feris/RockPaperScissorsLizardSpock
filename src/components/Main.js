import React, { useState } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

import Play from "./Play";
import Rules from "./Rules";

// Main component renders two buttons; 'Play Now' and 'Rules'. When 'Play Now' is clicked, it loads the play component. If 'Rules' is clicked, it loads the rules component.

const Main = () => {
  const [showPlay, setShowPlay] = useState(false);
  const [showRules, setShowRules] = useState(false);

  return (
    <Container fluid className="bg-warning text-dark text-center p-2">
      <Row>
        <Col>
          <Button
            variant="primary"
            onClick={() => {
              setShowPlay(true); // show the play component
              setShowRules(false); // Hide the rules component
            }}
          >
            Play Now
          </Button>
        </Col>
        <Col></Col>
        <Col>
          <Button
            variant="primary"
            onClick={() => {
              setShowRules(true); // show the rules and
              setShowPlay(false); // hide the play component
            }}
          >
            Rules
          </Button>
        </Col>
      </Row>
      {showPlay ? <Play /> : null}{" "}
      {/* if showPlay is true, render the play component */}
      {showRules ? <Rules /> : null}{" "}
      {/* if showRules is true, render the rules component */}
    </Container>
  );
};

export default Main;
