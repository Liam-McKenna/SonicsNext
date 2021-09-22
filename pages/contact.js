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
      <ContactForm />
    </ContactContainer>
  );
}

const ContactContainer = styled(motion.div)`
  h1 {
    text-align: center;
  }
`;

export default contact;
