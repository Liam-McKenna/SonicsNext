import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function CardsFramerMotion() {
  const [Active1, setActive1] = useState(true);
  const [Active2, setActive2] = useState(false);
  const [Active3, setActive3] = useState(false);
  const [Active4, setActive4] = useState(false);

  const animateObj = {
    closed: { width: '100px' },
    open: { width: '500px' },
  };

  return (
    <MotionContainer>
      <motion.div
        variants={animateObj}
        initial={{ opacity: 1 }}
        animate={Active1 ? 'open' : 'closed'}
        transition={{ type: 'spring', stiffness: 50 }}
        className="box"
        onClick={() => {
          setActive1(true);
          setActive2(false);
          setActive3(false);
          setActive4(false);
        }}
      ></motion.div>

      <motion.div
        variants={animateObj}
        initial="closed"
        animate={Active2 ? 'open' : 'closed'}
        transition={{ type: 'spring', stiffness: 50 }}
        className="box"
        onClick={() => {
          setActive1(false);
          setActive2(true);
          setActive3(false);
          setActive4(false);
        }}
      ></motion.div>
      <motion.div
        variants={animateObj}
        initial="closed"
        animate={Active3 ? 'open' : 'closed'}
        transition={{ type: 'spring', stiffness: 50 }}
        className="box"
        onClick={() => {
          setActive1(false);
          setActive2(false);
          setActive3(true);
          setActive4(false);
        }}
      ></motion.div>
      <motion.div
        variants={animateObj}
        initial="closed"
        animate={Active4 ? 'open' : 'closed'}
        transition={{ type: 'spring', stiffness: 50 }}
        className="box"
        onClick={() => {
          setActive1(false);
          setActive2(false);
          setActive3(false);
          setActive4(true);
        }}
      ></motion.div>
    </MotionContainer>
  );
}

const MotionContainer = styled.div`
  display: flex;
  gap: 1rem;
  .box {
    width: 100px;
    height: 500px;

    background-color: var(--color8);
  }
`;

export default CardsFramerMotion;
