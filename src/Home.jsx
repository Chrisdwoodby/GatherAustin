import Col from 'react-bootstrap/Col';
import banner from '../media/hero-banner.webp'

const Home = function() {
    return (
      <div>
        <div class="home-hero-banner">
          <Col id="banner-col-left">
            <section>
              <span id="banner-section-title">Welcome</span>
              <br></br>
              <span id="banner-section-subheader">Austin Young Adults</span>
              <br></br>
              <article id="banner-section-body">Gather Austin is a community for young adults to deepen relationships, nurture faith, ask hard questions, and be filled with hope. We welcome all people across race, faith background, gender, sexuality, and perspective.</article>
            </section>
          </Col>
          <Col id="banner-col-right">
            <figure class="banner-img">
              <img src={banner} alt="Gather Austin Group Picture"/>
              {/* <figcaption>Fig1. - Gather Austin Group Picture, Austin, Texas.</figcaption> */}
            </figure>
          </Col>
        </div>
      </div>
    )
}

export default Home;