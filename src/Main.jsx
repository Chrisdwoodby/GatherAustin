import {useState} from 'react';
import Navigation from './Navigation.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import PartnersPage from './Partners.jsx';

export default function Main(props) {
    const [Partners, viewPartners] = useState(false);
    const [about, viewAbout] = useState(false);
    const [home, viewHome] = useState(true);
    const [contact, viewContact] = useState(false);
    
    function renderAbout() {
        viewAbout(true);
        viewHome(false);
        viewContact(false);
        viewPartners(false);
        renderPage();
      }
      function renderContact() {
        viewAbout(false);
        viewHome(false);
        viewContact(true);
        viewPartners(false);
        renderPage();
      }
      function renderPartners() {
        viewAbout(false);
        viewContact(false);
        viewPartners(true);
        viewHome(false);
        renderPage();
      }
      function renderHome() {
        viewAbout(false);
        viewContact(false);
        viewPartners(false);
        viewHome(true);
        renderPage();
      }

    function renderPage() {
        if (home) {
          return <Home/>
        }
        if (contact) {
          return <Contact/>
        }
        if (about) {
          return <About/>
        }
        if (Partners) {
          return <PartnersPage/>
        }
      }

    return (
        <div>
          <Navigation viewPartners={viewPartners} viewContact={viewContact}
          viewAbout={viewAbout} renderPage={renderPage} viewHome={viewHome} renderAbout={renderAbout}
          renderContact={renderContact} renderPartners={renderPartners} renderHome={renderHome}/>
          {renderPage()}
          <Footer viewPartners={viewPartners} viewContact={viewContact}
          viewAbout={viewAbout} renderPage={renderPage} viewHome={viewHome} renderAbout={renderAbout}
          renderContact={renderContact} renderPartners={renderPartners} renderHome={renderHome}/>
        </div>
    )
}