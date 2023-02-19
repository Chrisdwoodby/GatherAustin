import { Container, Row, Col } from "react-bootstrap";
import banner from '../media/hero-banner.webp'

export default function About(props) {

    return (
    <div id="about-us-section-col-6-container">
        <div className="home-hero-banner">
          <Col md={6} id="banner-col-left">
            <section>
              <span id="banner-section-title">Welcome</span>
              <br></br>
              <span id="banner-section-subheader">Austin Young Adults</span>
              <br></br>
              <article id="banner-section-body">
              Join young adults from the Austin area in fellowship,
               worship, community, and discussion. Gather meets once a
                month to spend time asking challenging questions of 
                ourselves, our faith, and our world. All young adults 
                around their 20's to 30's from across race, faith background, gender,
                sexuality, and perspective are welcome here to meet, 
                to be, to gather.
              </article>
            </section>
          </Col>
          <Col md={6} id="banner-col-right">
            <figure className="banner-img">
              <img src={banner} alt="Gather Austin Group Picture"/>
            </figure>
          </Col>
        </div>
        <div className="contact-form-section">
        <h2>Get Connected</h2>
        <Container id="contact-form-container">
          <iframe
          id="JotFormIFrame-222988220239056"
          title="Contact Us"
          allow="geolocation; microphone; camera"
          src="https://form.jotform.com/222988220239056">
          </iframe>
        </Container>
      </div>
    </div>
    )
}