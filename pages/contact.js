import React from 'react';
import styled from 'styled-components';
//animation
import { motion } from 'framer-motion';
import { PageTransition } from '../animations/framerAnimations.js';
//components
import { siteTitle } from '../components/Layout.js';
import ContactForm from '../components/ContactForm.js';
import { Separator } from '../components/elements.js';

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
          <h2>Social</h2>
          <h2>Social</h2>
          <h2>Social</h2>
        </div>
      </div>
    </ContactContainer>
  );
}

const ContactContainer = styled(motion.div)`
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 2rem;
  }
  h1 {
    text-align: center;
  }
`;

export default contact;
