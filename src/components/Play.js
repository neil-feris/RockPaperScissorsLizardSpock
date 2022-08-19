import React, { useState } from "react";

import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";

import Icon from "./Icon";

// Play component displays 5 buttons for each player to select their choice. When a button is clicked, the player's choice is stored in the state.

const Play = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [winner, setWinner] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]; // Array of choices for the player to select from.
  const elements = ["cpu-card-title", "cpu-card-icon", "cpu-choice"]; // Array of elements to be updated when the player selects a choice.

  const computerChoiceGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 5); // Generates a random number between 0 and 4.
    return choices[randomNumber]; // Returns the choice at the index of the random number.
  };

  function showElements() {
    // show elements when winner is determined
    elements.forEach((element) => {
      document.getElementById(element).classList.remove("hide");
    });
  }

  function hideElements() {
    // hide elements before winner is determined
    elements.forEach((element) => {
      document.getElementById(element).classList.add("hide");
    });
  }

  // getPlayerChoice function gets the selected button and stores it in the state.
  const getPlayerChoice = (choice) => {
    setWinner(""); // reset winner to empty string
    hideElements(); // hide elements before winner is determined
    setPlayerChoice(choice);
    getComputerChoice(); // get computer's choice
  };

  // getComputerChoice function gets the computer's choice and stores it in the state.
  const getComputerChoice = () => {
    setComputerChoice(computerChoiceGenerator());
  };

  // getWinner function determines the winner of the game and stores it in the state.
  const getWinner = () => {
    // if player hasn't selected a choice, do nothing.
    if (!playerChoice) {
      return;
    }

    if (winner) {
      setWinner("");
      setPlayerChoice("");
      setComputerChoice("");
      return; // if winner is already determined, reset winner and choices.
    }

    // remove the hide class from elements with id cpu-card-title, cpu-card-icon & cpu-choice
    showElements();

    if (playerChoice === computerChoice) {
      setWinner("Tie"); // if both players select the same choice, it is a tie.
    } else if (
      (playerChoice === "Rock" && // Rock beats Scissors & Lizard
        (computerChoice === "Scissors" || computerChoice === "Lizard")) ||
      (playerChoice === "Paper" && // Paper beats Rock & Spock
        (computerChoice === "Rock" || computerChoice === "Spock")) ||
      (playerChoice === "Scissors" && // Scissors beats Paper & Lizard
        (computerChoice === "Paper" || computerChoice === "Lizard")) ||
      (playerChoice === "Lizard" && // Lizard beats Paper & Spock
        (computerChoice === "Spock" || computerChoice === "Paper")) ||
      (playerChoice === "Spock" && // Spock beats Rock & Scissors
        (computerChoice === "Scissors" || computerChoice === "Rock"))
    ) {
      setWinner("Player");
      setPlayerScore(playerScore + 1); // if player wins, increase player's score by 1.
    } else {
      setWinner("Computer"); // if none of the above conditions are met, the computer wins.
      setComputerScore(computerScore + 1); // if computer wins, increase computer's score by 1.
    }
  };

  // resetGame function resets the game and clears the state.
  const resetGame = () => {
    setPlayerChoice(""); // reset player choice
    setComputerChoice(""); // reset computer choice
    setWinner(""); // reset winner
    setPlayerScore(0); // reset player score
    setComputerScore(0); // reset computer score
    hideElements(); // hide elements before winner is determined
  };

  return (
    <Container className="bg-warning text-dark text-center p-2">
      <Row>
        <Col>
          <h3>Player's Choice</h3>
          <Card className="bg-warning text-center border-0">
            <Card.Body>
              <Card.Title>{playerChoice}</Card.Title>
              <Card.Text>
                {<Icon choice={playerChoice} />}
                {/* Icon is chosen based on player's choice */}
              </Card.Text>
            </Card.Body>
          </Card>
          {/* create a button for each item in choices */}
          {choices.map((choice) => (
            <Button
              key={choice}
              variant="outline-primary"
              className="m-1"
              onClick={() => getPlayerChoice(choice)}
            >
              {choice}
            </Button>
          ))}
        </Col>
        <Col className="play">
          <Col className="h3 mb-3">
            Select your choice and click "Play" to play against the computer.
          </Col>
          {/* button is disabled if playerChoice is not set */}
          <Button
            id="play-btn"
            disabled={!playerChoice}
            variant="outline-success"
            className="play-btn btn-lg m-1"
            onClick={() => {
              getWinner();
            }}
          >
            {/* if Winner is set set text to Click to reset */}
            {winner ? "Play Again" : "Play"}
          </Button>
        </Col>

        <Col>
          <h3>Computer's Choice</h3>
          <Card className="bg-warning text-center border-0">
            <Card.Body>
              <Card.Title id="cpu-card-title" className="hide">
                {/* Add class and id to hide and show the element */}
                {computerChoice}
              </Card.Title>
              <Card.Text id="cpu-card-icon" className="hide">
                {/* Add class and id to hide and show the element */}
                {<Icon choice={computerChoice} />}
                {/* Icon element is chosen based on computer's choice */}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="m-2">
        <Col>
          <h4>You chose: {playerChoice}</h4>
        </Col>
        <Col>
          {/* create a Table for the score */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Player</th>
                <th>Computer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{playerScore}</td>
                <td>{computerScore}</td>
              </tr>
            </tbody>
          </Table>
          <h3>Winner is</h3>
          <div id="results">{winner}</div>
        </Col>
        <Col>
          <h4 id="cpu-choice" className="hide">
            {/* Add class and id to hide and show the element */}
            Computer chose: {computerChoice}
          </h4>
        </Col>
      </Row>
      <Row></Row>
      <Row>
        <Col>
          <Button
            variant="outline-danger"
            className="m-1"
            onClick={() => resetGame()}
          >
            Reset Game
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Play;
