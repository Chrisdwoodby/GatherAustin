import Col from 'react-bootstrap/Col';
import banner from '../media/hero-banner.webp';
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
      <div className="about-us-main-section">
        <Container>
          <div id="about-banner-row">
            <Col id="about-left-col" md={6}>
              <h1>welcome to gather austin</h1>
              <article id="banner-section-body">Gather Austin is a community for young adults to deepen relationships, nurture faith, ask hard questions, and be filled with hope. We welcome all people across race, faith background, gender, sexuality, and perspective.</article>
            </Col>
            <Col id="about-us-page-right" md={6}>
              <h3>We're glad you're here</h3>
              <span>Click Below to Get Connected and Learn More</span>
              <a id="about-contact-btn" onClick={props.renderContact}>Contact us</a>
            </Col>
          </div>
        </Container>
      </div>
      <div id="social-media-divider">
        <Col md={6}><span>Join our Facebook Group for monthly meeting updates!</span></Col>
        <Col md={6}><a id="facebook" href="https://www.facebook.com/groups/637451804727252/" target="_blank" className="fa fa-facebook"> Gather Austin</a></Col>
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
                <h2>Austins Inclusive Young Adult Group</h2>
                <article>Gather Austin is a community for young adults to deepen relationships, nurture faith, ask hard questions, and be filled with hope. We welcome all people across race, faith background, gender, sexuality, and perspective.</article>
              </section>
            </Col>
          </Container>
        </div>
        <div id="home-faq-section">
          <h3>Common Questions</h3>
          <Container id="home-faq-container">
            <Col md={4} id="faq1">
            <Card className="faq" id="faq1">
              <Card.Body>
                <Card.Title>Do I need to belong to a certain type of church?</Card.Title>
                <Card.Text>
                  Not at all, all are welcome!
                </Card.Text>
              </Card.Body>
             </Card>
            </Col>
            <Col md={4} id="faq2">
            <Card className="faq" id="faq2">
              <Card.Body>
                <Card.Title>Where and when does Gather Austin meet?</Card.Title>
                <Card.Text>
                  Gather Austin meets on the first Thursday of the month, typically at Central Market located at 4001 N Lamar Blvd, Austin, TX 78705.
                </Card.Text>
              </Card.Body>
             </Card>
            </Col>
            <Col md={4} id="faq3">
            <Card className="faq" id="faq3">
              <Card.Body>
                <Card.Title>Do I need to bring anything or RSVP for meetups?</Card.Title>
                <Card.Text>
                  There is no need to RSVP or to bring anything. Drinks and snacks will be provided!
                </Card.Text>
              </Card.Body>
             </Card>
            </Col>
          </Container>
        </div>
      </div>
    )
}
