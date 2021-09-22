import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

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

const ServiceCard = ({ title, img, slug }) => {
  const [isOpen, setisOpen] = useState(false);
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  return (
    <Link href={'/services/' + slug}>
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: imageIsLoaded ? 1 : 0 }}
        >
          <Image
            layout="fill"
            objectFit="cover"
            src={`/${img}`}
            alt={img}
            onLoad={(event) => {
              const target = event.target;
              // next/image use an 1x1 px git as placeholder. We only want the onLoad event on the actual image
              if (target.src.indexOf('data:image/gif;base64') < 0) {
                setImageIsLoaded(true);
              }
            }}
          />
        </motion.div>
        <div className="gradiant"></div>

        <AnimateSharedLayout>
          <motion.div layout className="cardContentContainer">
            <motion.h2 layout>{title}</motion.h2>
            <AnimatePresence>{isOpen && <HiddenContent />}</AnimatePresence>
          </motion.div>
        </AnimateSharedLayout>
      </CardContainer>
    </Link>
  );
};

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

export default ServiceCard;
