import React, { useState, useEffect } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

function FamerMTest() {
  const items = [0, 1, 2];
  const [expanded, setExpanded] = useState(0);

  const animateObj = {
    closed: { width: 20 },
    open: {
      width: '100%',
      transition: {
        type: 'spring',
      },
    },
  };

  function Item({ item, expanded, setExpanded }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
      setExpanded(item);
      setIsOpen(!isOpen);
    };

    return (
      <motion.li
        layout
        onClick={toggleOpen}
        variants={animateObj}
        initial="closed"
        animate={expanded === item ? 'open' : 'closed'}
        exit="closed"
      >
        {/* <motion.div className="avatar" layout /> */}
        {/* <AnimatePresence>{expanded === item && <Content />}</AnimatePresence> */}
      </motion.li>
    );
  }

  function Content() {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, width: '100%' }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="row" />
        <div className="row" />
        <div className="row" />
      </motion.div>
    );
  }

  return (
    <MotionContainer>
      <AnimateSharedLayout>
        <motion.ul layout initial={{ borderRadius: 25 }}>
          {items.map((item) => (
            <Item
              key={item}
              item={item}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          ))}
        </motion.ul>
      </AnimateSharedLayout>
    </MotionContainer>
  );
}

const MotionContainer = styled(motion.div)`
  width: 100%;
  ul {
    min-height: 200px;
    width: 100%;
    min-width: 100px;
    max-width: 350px;

    display: flex;
    justify-content: center;
    flex-direction: row;
    /* background: white; */
    padding: 20px;
    border-radius: 25px;
  }

  li {
    display: flex;
    margin: 5px;
    background-color: rgba(214, 214, 214, 0.5);
    border-radius: 10px;
    min-width: 20px;
    /* padding: 20px; */
    overflow: hidden;
    cursor: pointer;
  }

  /* li:last-child {
    margin-bottom: 0px;
  } */

  .avatar {
    width: 40px;
    height: 40px;
    background-color: #666;
    border-radius: 20px;
  }

  .row {
    width: 100%;
    height: 8px;
    background-color: #999;
    border-radius: 10px;
    margin-top: 12px;
  }
`;

export default FamerMTest;
