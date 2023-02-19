import { remove } from "lodash";
import { Container } from "react-bootstrap";

export default function Contact(props) {

    return (
      <div className="contact-form-section">
        <h1>Contact Us</h1>
        <Container id="contact-form-container">
          <iframe
          id="JotFormIFrame-222988220239056"
          title="Contact Us"
          allow="geolocation; microphone; camera"
          src="https://form.jotform.com/222988220239056">
          </iframe>
        </Container>
      </div>
    )
}
