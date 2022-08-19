// import bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// import custom CSS
import "./App.css";

// import bootstrap components
import { Container, Row, Col } from "react-bootstrap";

// import Header component
import Header from "./components/Header";

// import Main component
import Main from "./components/Main";

const App = () => {
  return (
    <Container fluid className="bg-dark p-0">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <Main />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
