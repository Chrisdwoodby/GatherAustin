import Col from 'react-bootstrap/Col';
import banner from '../media/hero-banner.webp'
import cross from '../media/cross.webp'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function Home() {
    return (
      <div>
        <div class="home-hero-banner">
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
            <figure class="banner-img">
              <img src={banner} alt="Gather Austin Group Picture"/>
            </figure>
          </Col>
        </div>
        <div class="home-about-section">
          <Container id="home-about-container">
            <Col md={6} id="about-col-left">
              <figure class="home-about-img">
                <img src={cross} alt="Gather Austin Group Picture"/>
              </figure>
            </Col>
            <Col md={6} id="about-col-right">
              <section>
                <h1>Austins Inclusive Youth Group</h1>
                <article>Gather Austin is a community for young adults to deepen relationships, nurture faith, ask hard questions, and be filled with hope. We welcome all people across race, faith background, gender, sexuality, and perspective.</article>
              </section>
            </Col>
          </Container>
        </div>
        <div class="home-faq-section">
          <h2>Common Questions</h2>
          <Container id="home-faq-container">
            <Col md={4}>
            <Card >
              <Card.Body>
                <Card.Title>Question 1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
             </Card>
            </Col>
            <Col md={4}>
            <Card >
              <Card.Body>
                <Card.Title>Question 2</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
             </Card>
            </Col>
            <Col md={4}>
            <Card >
              <Card.Body>
                <Card.Title>Qestion 3</Card.Title>
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
