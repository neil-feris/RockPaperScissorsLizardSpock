import React, { useState, useEffect } from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

import Icon from "./Icon";

// Play component displays 5 buttons for each player to select their choice. When a button is clicked, the player's choice is stored in the state.

const Play = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [winner, setWinner] = useState("");

  const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

  const computerChoiceGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
  };

  // getPlayerChoice function gets the selected button and stores it in the state.
  const getPlayerChoice = (choice) => {
    resetGame();
    setPlayerChoice(choice);
  };
  // getComputerChoice function gets the computer's choice and stores it in the state.
  const getComputerChoice = () => {
    setComputerChoice(computerChoiceGenerator());
  };

  // resetGame function resets the game and clears the state.
  const resetGame = () => {
    setPlayerChoice(""); // reset player choice
    setComputerChoice(""); // reset computer choice
    setWinner(""); // reset winner
    // reset play button text to "Play Now" when player clicks the button.
    document.getElementById("play-btn").innerHTML = "Play";
  };

  // in order the get the latest values from state, useEffect is used.
  useEffect(() => {
    // getWinner function determines the winner of the game and stores it in the state.
    const getWinner = () => {
      // if either player or computer has not selected a choice, we cannot determine a winner.
      if (!playerChoice || !computerChoice) {
        return;
      }

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
      } else {
        setWinner("Computer"); // if none of the above conditions are met, the computer wins.
      }
    };
    // if both player and computer have selected a choice, get the winner.
    if (playerChoice && computerChoice) {
      document.title = `${playerChoice} VS ${computerChoice}`; // change the title of the page to the player's choice vs the computer's choice.
      getWinner();
    }
  }, [playerChoice, computerChoice]);

  return (
    <Container className="bg-warning text-dark text-center p-2">
      <Row>
        <Col>
          <h3>Player's Choice</h3>
          <Card className="bg-warning text-center border-0">
            <Card.Body>
              <Card.Title>{playerChoice}</Card.Title>
              <Card.Text>{<Icon choice={playerChoice} />}</Card.Text>
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
          {/* button is disabled if playerChoice is not set */}
          <Button
            id="play-btn"
            disabled={!playerChoice}
            variant="outline-success"
            className="play-btn btn-lg m-1"
            onClick={() => {
              getComputerChoice();
              // set Button text to "Play Again" when player clicks the button.
              document.getElementById("play-btn").innerHTML = "Play Again";
            }}
          >
            Play
          </Button>
        </Col>

        <Col>
          <h3>Computer's Choice</h3>
          <Card className="bg-warning text-center border-0">
            <Card.Body>
              <Card.Title>{computerChoice}</Card.Title>
              <Card.Text>{<Icon choice={computerChoice} />}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="m-2">
        <Col>
          <h4>You chose: {playerChoice}</h4>
        </Col>
        <Col>
          <h3>Winner is</h3>
          <div id="results">{winner}</div>
        </Col>
        <Col>
          <h4>Computer chose: {computerChoice}</h4>
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
