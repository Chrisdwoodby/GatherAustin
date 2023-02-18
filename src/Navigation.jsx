import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import logo from '../media/logo.webp';

export default function Navigation(props) {
    const renderFAQs = function() {
        props.renderHome();
        setTimeout(() => {
            document.getElementById('home-faq-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100)
    }
    return (
      <>
        <div className="navbar-main-row">
          <Col id="navbar-col-left">
            <div className="navbar-row-one">
              <Container>
                <Navbar.Brand href="#home">Gather Austin</Navbar.Brand>
              </Container>
            </div>
            <div className="navbar-row-two">
              <Navbar >
                <Container id="navbar-container">
                  <Nav className="justify-content-center">
                    <Nav.Link onClick={props.renderHome} href="#home">Home</Nav.Link>
                    <Nav.Link onClick={props.renderContact} href="#contact">Contact Us</Nav.Link>
                    <Nav.Link onClick={props.renderAbout} href="#about">About</Nav.Link>
                    <Nav.Link onClick={renderFAQs} href="#partners">FAQ's</Nav.Link>
                    <Nav.Link onClick={props.renderPartners} href="#partners">Partners</Nav.Link>
                  </Nav>
                </Container>
              </Navbar>
            </div>
          </Col>
          <Col id="navbar-col-right">
            <Container id="logo-container">
              <img className="gather-logo" src={logo}/>
            </Container>
          </Col>
        </div>
      </>
    )
}