import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function CardsFramerMotion() {
  const [animate, setanimate] = useState(false);

  const animateObj = {
    closed: { width: '' },
    open: { width: '30%' },
  };

  return (
    <MotionContainer>
      <motion.div
        variants={animateObj}
        initial={{ opacity: 0.5 }}
        animate={animate ? 'open' : 'closed'}
        transition={{ type: 'spring', stiffness: 200 }}
        className="box"
        onClick={() => setanimate(!animate)}
      ></motion.div>

      <motion.div
        variants={animateObj}
        initial="closed"
        animate={animate ? 'open' : 'closed'}
        transition={{ type: 'spring', stiffness: 30 }}
        className="box"
        onClick={() => setanimate(!animate)}
      ></motion.div>
    </MotionContainer>
  );
}

const MotionContainer = styled.div`
  display: flex;
  gap: 1rem;
  .box {
    width: 100px;
    height: 100px;

    background-color: var(--color8);
  }
`;

export default CardsFramerMotion;
