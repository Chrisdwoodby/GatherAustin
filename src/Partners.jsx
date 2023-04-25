import { Container, Row, Col} from "react-bootstrap";

export default function Partners(props) {
    return (
      <div className="partners-section">
        <Container>
          <header className="partners-page-header"><h1>Our Partners</h1></header>
          <Row className="partners-row">
            <h2>Austin Partners</h2>
            <Col md={6}>
              <section>
                <main>
                  <p><strong>787 Collective | Austin Presbyterian Theological Seminary</strong></p>
                  <p><a href="https://787collective.org/ " target="_blank">www.787collective.org/ </a></p>
                </main>
                <main>
                  <p><strong>Gather Network</strong></p>
                  <p><a href="https://www.gathernetwork.org/" target="_blank">www.gathernetwork.org/</a></p>
                </main>
                <main>
                  <p><strong>Living Word Lutheran Church, Buda</strong></p>
                  <p><a href="https://livingwordbuda.org/" target="_blank">www.livingwordbuda.org/</a></p>
                </main>
                <main>
                  <p><strong>Palm Valley Lutheran Church, Round Rock</strong></p>
                  <p><a href="https://www.pvlc.org/ " target="_blank">www.pvlc.org/ </a></p>
                </main>
              </section>
            </Col>
            <Col md={6}>
              <section>
                <main>
                  <p><strong>St. Martin’s Lutheran Church, Austin</strong></p>
                  <p>7375 Samuel Dr, Denver, CO 80221</p>
                  <p><a href="https://saintmartins.org/" target="_blank">www.saintmartins.org/</a></p>
                </main>
                <main>
                  <p><strong>ELCA Young Adult Ministry</strong></p>
                  <p>8765 W Higgins Road, Chicago, IL 60631</p>
                  <p><a href="https://sites.google.com/view/elcayoungadults/home" target="_blank">www.elcayoungadults.com</a></p>
                </main>
                <main>
                  <p><strong>Southwestern Texas Synod</strong></p>
                  <p>8765 W Higgins Road, Chicago, IL 60631</p>
                  <p><a href="https://www.swtsynod.org/" target="_blank">www.swtsynod.org/</a></p>
                </main>
                <main>
                  <p><strong>Triumphant Love Lutheran Church</strong></p>
                  <p>8765 W Higgins Road, Chicago, IL 60631</p>
                  <p><a href="https://tllc.org/" target="_blank">www.tllc.org/ </a></p>
                </main>
              </section>
            </Col>
          </Row>
          <Row className="partners-row">
            <Col md={6}>
              <section>
                <header><h2>National Partners</h2></header>
                <main>
                  <p><strong>First Lutheran Church</strong></p>
                  <p>1515 N Cascade Ave, Colorado Springs, CO 80907</p>
                  <p><a href="https://flccs.net/" target="_blank">https://flccs.net</a></p>
                </main>
                <main>
                  <p><strong>Ascension Lutheran Church</strong></p>
                  <p>2505 N Circle Dr, Colorado Springs, CO 80909 </p>
                  <p><a href="https://www.ascensioncos.org/" target="_blank">https://www.ascensioncos.org</a></p>
                </main>
                <main>
                  <p><strong>Grace Lutheran</strong></p>
                  <p>1128 E Boulder St, Colorado Springs, CO 80903</p>
                  <p><a href="https://gracelutherancos.org/" target="_blank">https://gracelutherancos.org</a></p>
                </main>
                <main>
                  <p><strong>Trinity Lutheran Church</strong></p>
                  <p>17750 Knollwood Dr, Monument, CO 80132</p>
                  <p><a href="https://trinitymonument.org/" target="_blank">https://trinitymonument.org</a></p>
                </main>
              </section>
            </Col>
            <Col md={6}>
              <section>
                <header><h2>Other Partners</h2></header>
                <main>
                  <p><strong>Rocky Mountain Synod  - ELCA</strong></p>
                  <p>7375 Samuel Dr, Denver, CO 80221</p>
                  <p><a href="https://www.rmselca.org" target="_blank">www.rmselca.org</a></p>
                </main>
                <main>
                  <p><strong>ELCA Young Adult Ministry</strong></p>
                  <p>8765 W Higgins Road, Chicago, IL 60631</p>
                  <p><a href="https://sites.google.com/view/elcayoungadults/home" target="_blank">www.elcayoungadults.com</a></p>
                </main>
              </section>
            </Col>
          </Row>
        </Container>
      </div>
    )
}