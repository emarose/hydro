import { WiredButton } from "wired-elements-react";
import { useState } from "react";
import cana from "./assets/cana.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import dwc1 from "./assets/dwc1.jpg";
import { Stack } from "react-bootstrap";
function App() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <Container className="text-center d-flex flex-column" fluid>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">Inicio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#intro">Intro</Nav.Link>
                <Nav.Link href="#pricing">Ventajas</Nav.Link>
                <NavDropdown title="Sistemas">
                  <NavDropdown.Item href="#action/3.2">DWC</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Hempy</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <section className="hero">
          <img className="heroImg" src={cana} alt="cana" />
          <a href="#intro" className="arrow">
            ↓
          </a>
        </section>
        <section className="intro" id="intro">
          <Container className="border">
            <h1>Intro</h1>
            <h4>Qué es la hidroponía?</h4>
            <Stack direction="horizontal" gap={1}>
              <span className="w-50">
                <p>
                  La hidroponia se refiere especificamente a la forma que las
                  plantas toman nutrientes para desarrollarse.
                </p>
                <p>
                  En este caso lo hacen directa y unicamente del agua, la cual
                  lleva minerales quimicos disueltos. Existen diversos tipos de
                  hidroponia dependiendo de la modalidad, (aquaponia, aeroponia,
                  etc)
                </p>
              </span>
              <span className="introImg">
                <img src={dwc1} style={{ width: "300px" }} alt="dwc" />
              </span>
            </Stack>
          </Container>
        </section>
      </Container>
    </>
  );
}

export default App;
