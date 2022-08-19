import React from "react";

import { Container, Row, Col } from "react-bootstrap";

// Rules component displays the rules of the game

const Rules = () => {
  return (
    <Container className="bg-warning text-dark text-center p-2">
      <Row className="text-center text-danger">
        <Col>
          <h3>Select your choice and click the play button.</h3>
          <p>Click the reset button to reset the scores.</p>
        </Col>
      </Row>
      <Row>
        <Col id="rules">
          <h3>The game expands on the traditional Rock, Paper, Scissors.</h3>
          <h4>The rules of the game are as follows:</h4>
          - Scissors cuts Paper
          <br />
          - Paper covers Rock
          <br />
          - Rock crushes Lizard
          <br />
          - Lizard poisons Spock
          <br />
          - Spock smashes Scissors
          <br />
          - Scissors decapitates Lizard
          <br />
          - Lizard eats Paper
          <br />
          - Paper disproves Spock
          <br />
          - Spock vaporizes Rock
          <br />
          - (and as it always has) Rock crushes Scissors
          <br />
          <h4>
            Inspired by{" "}
            <a
              href="https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock"
              target="_blank"
              rel="noreferrer"
            >
              The Big Bang Theory
            </a>
          </h4>
        </Col>
      </Row>
    </Container>
  );
};

export default Rules;
