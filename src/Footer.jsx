import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import logo from '../media/logo.webp'

export default function footer() {
    return (
        <div class="footer-section">
          <footer>
            <Container>
              <Row>
                <Col id="footer-logo-col" md={4}>
                  <figure class="footer-logo">
                    <img src={logo} alt="Gather Austin Logo"/>
                  </figure>
                </Col>
                <Col id="footer-menu-col" md={4}>
                  <Nav id="footer-menu">
                    <span>Menu</span>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#contact">Contact Us</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#partners">Partners</Nav.Link>
                  </Nav>
                </Col>
                <Col id="footer-social-icon-col" md={4}>
                  <div class="social-icons">
                    <a id="facebook" href="https://www.facebook.com/chris.woodby.1/" target="_blank" class="fa fa-facebook"></a>
                    <a id="insta" href="https://www.instagram.com/chriswoodby/" target="_blank" class="fa fa-instagram"></a>
                    <a id="git" href="https://github.com/Chrisdwoodby" target="_blank" class="fa fa-github"></a>
                    <a id="linkedin" href="https://www.linkedin.com/in/christopher-woodby-766a88202/" target="_blank" class="fa fa-linkedin"></a>
                  </div>
                </Col>
              </Row>
            </Container>
          </footer>
        </div>
    )
}

