import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import logo from '../media/logo.webp'

export default function footer(props) {

    return (
        <div>
          <div className="footer-section">
            <footer>
              <Container>
                <Row>
                  <Col id="footer-logo-col" md={4}>
                    <figure className="footer-logo">
                      <img src={logo} alt="Gather Austin Logo"/>
                    </figure>
                  </Col>
                  <Col id="footer-menu-col" md={4}>
                    <Nav id="footer-menu">
                      <span>Menu</span>
                      <Nav.Link onClick={props.renderHome} href="#home">Home</Nav.Link>
                      <Nav.Link onClick={props.renderContact} href="#contact-form-container">Contact Us</Nav.Link>
                      <Nav.Link onClick={props.renderAbout} href="#about">About</Nav.Link>
                      <Nav.Link onClick={props.renderPartners} href="#partners">Partners</Nav.Link>
                    </Nav>
                  </Col>
                  <Col id="footer-social-icon-col" md={4}>
                    <div className="social-icons">
                      <a id="facebook" href="https://www.facebook.com/groups/637451804727252/" target="_blank" className="fa fa-facebook"></a>
                      <a id="insta" href="https://instagram.com/gather_austin?igshid=YmMyMTA2M2Y=" target="_blank" className="fa fa-instagram"></a>
                    </div>
                  </Col>
                </Row>
              </Container>
            </footer>
          </div>
          <div className="bottom-footer-section">
            <Container>
              <section>
                <span>Powered By Woodby Web Works</span>
              </section>
            </Container>
          </div>
        </div>
    )
}

