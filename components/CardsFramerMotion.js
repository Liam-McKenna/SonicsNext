import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { motion, AnimateSharedLayout } from 'framer-motion';

function CardsFramerMotion() {
  const cardImages = [
    'cardImg-1.jpg',
    'cardImg-2.jpg',
    'cardImg-3.jpg',
    'cardImg-4.jpg',
  ];
  const [Active1, setActive1] = useState(true);
  const [Active2, setActive2] = useState(false);
  const [Active3, setActive3] = useState(false);
  const [Active4, setActive4] = useState(false);

  const animateObj = {
    closed: { width: '' },
    open: {
      width: 500,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  function Item() {
    return <div className=""></div>;
  }

  return (
    <AnimateSharedLayout>
      <MotionContainer layout>
        <motion.div
          layout
          variants={animateObj}
          initial="open"
          animate={Active1 ? 'open' : 'closed'}
          // transition={{ type: 'spring', stiffness: 50 }}
          className="option"
          onClick={() => {
            setActive1(true);
            setActive2(false);
            setActive3(false);
            setActive4(false);
          }}
        >
          <div className="image">
            <Image
              src={`/images/CardImages/${cardImages[0]}`}
              width={500}
              height={500}
              layout="fill"
              objectFit="cover"
              alt="card"
            />
          </div>
          <div className="tag">
            <div className="icon">
              {' '}
              <Image
                src={'/images/icons/tripleDot.svg'}
                width={30}
                height={50}
                alt="tripleDot"
              />
            </div>
            <div className="description">
              <h2>Title</h2>
              <p>text</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          layout
          variants={animateObj}
          initial="closed"
          animate={Active2 ? 'open' : 'closed'}
          // transition={{ type: 'spring', stiffness: 50 }}
          className="option"
          onClick={() => {
            setActive1(false);
            setActive2(true);
            setActive3(false);
            setActive4(false);
          }}
        >
          {' '}
          <div className="image">
            <Image
              src={`/images/CardImages/${cardImages[1]}`}
              width={500}
              height={500}
              layout="fill"
              objectFit="cover"
              alt="card"
            />
          </div>
          <div className="tag">
            <div className="icon">
              {' '}
              <Image
                src={'/images/icons/tripleDot.svg'}
                width={30}
                height={50}
                alt="tripleDot"
              />
            </div>
            <div className="description">
              <h2>Title</h2>
              <p>text</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          layout
          variants={animateObj}
          initial="closed"
          animate={Active3 ? 'open' : 'closed'}
          // transition={{ type: 'spring', stiffness: 50 }}
          className="option"
          onClick={() => {
            setActive1(false);
            setActive2(false);
            setActive3(true);
            setActive4(false);
          }}
        >
          <div className="image">
            <Image
              src={`/images/CardImages/${cardImages[2]}`}
              width={500}
              height={500}
              layout="fill"
              objectFit="cover"
              alt="card"
            />
          </div>
          <div className="tag">
            <div className="icon">
              <Image
                src={'/images/icons/tripleDot.svg'}
                width={30}
                height={50}
                alt="tripleDot"
              />
            </div>
            <div className="description">
              <h2>Title</h2>
              <p>text</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={animateObj}
          initial="closed"
          animate={Active4 ? 'open' : 'closed'}
          // transition={{ type: 'spring', stiffness: 50 }}
          className="option"
          onClick={() => {
            setActive1(false);
            setActive2(false);
            setActive3(false);
            setActive4(true);
          }}
        >
          <div className="image">
            <Image
              src={`/images/CardImages/${cardImages[3]}`}
              width={500}
              height={500}
              layout="fill"
              objectFit="cover"
              alt="card"
            />
          </div>
          <div className="tag">
            <div className="icon">
              <Image
                src={'/images/icons/tripleDot.svg'}
                width={30}
                height={50}
                alt="tripleDot"
              />
            </div>
            <div className="description">
              <h2>Title</h2>
              <p>text</p>
            </div>
          </div>
        </motion.div>
      </MotionContainer>
    </AnimateSharedLayout>
  );
}

const MotionContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 500px;
  /* min-width: 950px; */
  gap: 0.5rem;
  .option {
    position: relative;
    background-size: auto 120%;
    background-position: center;
    min-width: 30px;
    width: 30px;
    height: 300px;
    background-color: var(--color8);
    border-radius: 30px;
    overflow: hidden;
    .image {
      object-fit: fill;
      height: 100%;
    }

    .tag {
      width: 100%;
      display: flex;
      position: absolute;
      height: 50px;
      padding-left: 10px;
      left: 0px;
      bottom: 20px;
      pointer-events: none;
      .icon {
        min-width: 40px;
        max-width: 40px;
      }
      .description {
        min-width: 200px;
        max-width: 200px;
        opacity: 1;
      }
    }
  }
`;

export default CardsFramerMotion;
