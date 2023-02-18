import Col from 'react-bootstrap/Col';
import banner from '../media/hero-banner.webp'
import cross from '../media/cross.webp'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function Home(props) {
  window.addEventListener('scroll', function() {
    var element = document.querySelector('#home-faq-container');
    if (element !== null) {
      var position = element.getBoundingClientRect();
      var categories3 = document.querySelectorAll('.card');
      
        if(position.top >= 0 && position.bottom <= window.innerHeight) {
        }
        if(position.top < window.innerHeight && position.bottom >= 0) {
         for (var i = 0; i < categories3.length; i++) {
              categories3[i].setAttribute("id", "faq-loaded");
         }
        }
    }
    });
  
    return (
      <div>
        <div className="home-hero-banner">
          <Col md={6} id="banner-col-left">
            <section>
              <span id="banner-section-title">Welcome</span>
              <br></br>
              <span id="banner-section-subheader">Austin Young Adults</span>
              <br></br>
              <article id="banner-section-body">Gather Austin is a community for young adults to deepen relationships, nurture faith, ask hard questions, and be filled with hope. We welcome all people across race, faith background, gender, sexuality, and perspective.</article>
            </section>
          </Col>
          <Col md={6} id="banner-col-right">
            <figure className="banner-img">
              <img src={banner} alt="Gather Austin Group Picture"/>
            </figure>
          </Col>
        </div>
        <div className="home-about-section">
          <Container id="home-about-container">
            <Col md={4} id="about-col-left">
              <figure className="home-about-img">
                <img src={cross} alt="Cross image"/>
              </figure>
            </Col>
            <Col md={8} id="about-col-right">
              <section>
                <h1>Austins Inclusive Young Adult Group</h1>
                <article>Gather Austin is a community for young adults to deepen relationships, nurture faith, ask hard questions, and be filled with hope. We welcome all people across race, faith background, gender, sexuality, and perspective.</article>
              </section>
            </Col>
          </Container>
        </div>
        <div id="home-faq-section">
          <h2>Common Questions</h2>
          <Container id="home-faq-container">
            <Col md={4} id="faq1">
            <Card className="faq" id="faq1">
              <Card.Body>
                <Card.Title>Do I need to belong to a certain type of church?</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
             </Card>
            </Col>
            <Col md={4} id="faq2">
            <Card className="faq" id="faq2">
              <Card.Body>
                <Card.Title>Where and when does Gather Austin meet?</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
             </Card>
            </Col>
            <Col md={4} id="faq3">
            <Card className="faq" id="faq3">
              <Card.Body>
                <Card.Title>Do I need to bring anything or RSVP for meetups?</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
             </Card>
            </Col>
          </Container>
        </div>
      </div>
    )
}
