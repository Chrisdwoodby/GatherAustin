import { Container, Row, Col } from "react-bootstrap";

export default function About(props) {

    return (
    <div>
      <div className="about-us-main-section">
        <Container>
          <div id="about-banner-row">
            <Col id="about-left-col" md={6}>
              <article>
                  this is filler text because it needs to be added 
                  this is filler text because it needs to be added 
                  this is filler text because it needs to be added 
                  this is filler text because it needs to be added
                  this is filler text because it needs to be added 
                  this is filler text because it needs to be added 
                  this is filler text because it needs to be added 
                  this is filler text because it needs to be added
              </article>
              <br></br>
              <article>
                  this is filler text because it needs to be added 
                  this is filler text because it needs to be added 
                  this is filler text because it needs to be added 
                  this is filler text because it needs to be added
              </article>
            </Col>
            <Col id="about-us-page-right" md={6}>
              <h1>welcome to gather austin</h1>
              <span>Click below to contact us and learn more</span>
              <a id="about-contact-btn">Contact us</a>
            </Col>
          </div>
        </Container>
      </div>
      {/* <div>
        <Container>
          <Row></Row> 
                  <article>
                  this is filler text because it needs to be added 
                  this is filler text because it needs to be added 
                  this is filler text because it needs to be added 
                  this is filler text because it needs to be added
                  this is filler text because it needs to be added 
                  this is filler text because it needs to be added 
                  this is filler text because it needs to be added 
                  this is filler text because it needs to be added
                  </article>   
        </Container>
      </div>  */}
    </div>
    )
}