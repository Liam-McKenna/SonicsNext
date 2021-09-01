import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { servicesData } from '../public/data/services.js';
import { v4 as uuidv4 } from 'uuid';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

function Cards() {
  const framerVar = {
    move: { y: -5 },
  };

  const HiddenContent = () => {
    return (
      <motion.h3
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        Learn More...
      </motion.h3>
    );
  };

  const Card = ({ title, img }) => {
    const [isOpen, setisOpen] = useState(false);
    return (
      <CardContainer
        onMouseEnter={() => {
          setisOpen(true);
        }}
        onMouseLeave={() => {
          setisOpen(false);
        }}
        variants={framerVar}
        animate={isOpen ? `move` : ''}
      >
        <Image
          layout="fill"
          objectFit="cover"
          src={`/images/CardImages/${img}`}
        />
        <div className="gradiant"></div>

        <AnimateSharedLayout>
          <motion.div layout className="cardContentContainer">
            <motion.h2 layout>{title}</motion.h2>
            <AnimatePresence>{isOpen && <HiddenContent />}</AnimatePresence>
          </motion.div>
        </AnimateSharedLayout>
      </CardContainer>
    );
  };

  return (
    <CardsContainer>
      {Object.keys(servicesData).map((data) => {
        return (
          <Card
            title={servicesData[data]['name']}
            img={servicesData[data]['img']}
            key={uuidv4()}
          />
        );
      })}
    </CardsContainer>
  );
}

const CardsContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 1rem;
  width: 100%;

  @media (max-width: 780px) {
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  }
`;

const CardContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 200px;
  max-height: 200px;
  border-radius: 10px;
  overflow: hidden;

  .gradiant {
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8) 20%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }

  .cardContentContainer {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  h2 {
  }
  h3 {
    bottom: 10px;
    font-weight: 200;
    opacity: 0.8;
  }
`;

export default Cards;
