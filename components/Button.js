import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';

function Button({ title, link }) {
  //animate states

  return (
    <ButtonContainer
      whileHover={{ scale: 1.2, borderRadius: '10px' }}
      whileTap={{
        scale: 0.8,
        borderRadius: '100px',
      }}
    >
      <Link href="#">
        <a>{title}</a>
      </Link>
    </ButtonContainer>
  );
}

const ButtonContainer = styled(motion.div)`
  width: auto;
  height: auto;
  /* background-color: var(--color1); */
  border-radius: 10px;
  display: flex;
  justify-content: center;
  border: 2px solid white;

  a {
    padding: 0.3rem 1rem 0.3rem 1rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
`;

export default Button;
