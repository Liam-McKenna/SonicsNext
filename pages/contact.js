import React from 'react';
import styled from 'styled-components';
//animation
import { motion } from 'framer-motion';
import { PageTransition } from '../animations/framerAnimations.js';
//components
import { siteTitle } from '../components/Layout.js';
import ContactForm from '../components/ContactForm.js';
import { Separator } from '../components/elements.js';
import Social from '../components/SocialLinks.js';

function contact() {
  return (
    <ContactContainer
      variants={PageTransition}
      initial="hidden"
      animate="enter"
      exit="exit"
      layout
    >
      <h1>Contact</h1>
      <Separator />
      <div className="grid">
        <div className="form">
          <ContactForm />
        </div>
        <div className="contact">
          <h3>
            Sonics Audio Visual Integrators Ltd. Unit 30 Tallaght Business
            Centre Whitestown Road Tallaght Dublin 24 D24 DY86
          </h3>
          <br />
          <h3>info@sonics.ie</h3>
          <br />
          <h3>+ 353 (0)1 4902777</h3>
          <br />
          <Social />
          <Separator />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2385.349455748622!2d-6.3858169834878415!3d53.28327487996571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486774c7abe5268d%3A0xa20fb602d319a3f5!2sSonics%20Audio%20Visual%20Integrators!5e0!3m2!1sen!2sie!4v1632756765999!5m2!1sen!2sie"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </ContactContainer>
  );
}

const ContactContainer = styled(motion.div)`
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  h1 {
    text-align: center;
  }
  h3 {
    font-weight: normal;
  }
`;

export default contact;
