import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import styled from 'styled-components';

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Gallery = ({ gallery }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, gallery.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <GalleryContainer>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          className="FramerContainer"
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <div className="imgContainer">
            <Image
              src={`/images/services/gallery/${gallery[imageIndex]}`}
              alt={gallery[imageIndex]}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        {'‣'}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {'‣'}
      </div>
    </GalleryContainer>
  );
};

const GalleryContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30vh;
  overflow: hidden;

  .FramerContainer {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .imgContainer {
    pointer-events: none;
    width: 100%;
    height: 100%;
  }

  .next,
  .prev {
    top: calc(50% - 20px);
    position: absolute;
    background: white;
    color: black;
    border-radius: 30px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    z-index: 2;
  }

  .next {
    right: 10px;
  }

  .prev {
    left: 10px;
    transform: scale(-1);
  }
`;

export default Gallery;
