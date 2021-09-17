import React, { useState, useEffect } from 'react';
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

const Modal = ({ showModal, setShowModal, gallery, imageIndex }) => {
  const modalBG = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <ModalContainer
          variants={modalBG}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={() => {
            setShowModal(false);
          }}
        >
          <motion.div className="imgContainer">
            <Image
              src={`/images/services/gallery/${gallery[imageIndex]}`}
              alt={gallery[imageIndex]}
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </ModalContainer>
      )}
    </AnimatePresence>
  );
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Gallery = ({ gallery }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [showModal, setShowModal] = useState(false);
  const [tapStart, setTapStart] = useState({ x: 1, y: 1 });
  const [tapEnd, setTapEnd] = useState({ x: 0, y: 0 });
  const imageIndex = wrap(0, gallery.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    Math.abs(tapStart.x - tapEnd.x) <= 20 &&
    Math.abs(tapStart.x - tapEnd.x) >= -20 &&
    Math.abs(tapStart.y - tapEnd.y) <= 20 &&
    Math.abs(tapStart.y - tapEnd.y) >= -20
      ? // tapStart.x === tapEnd.x && tapStart.y === tapEnd.y
        setTimeout(() => setShowModal(true), 50)
      : '';
  }, [tapStart, tapEnd]);

  return (
    <>
      <GalleryContainer>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className="FramerContainer"
            // onClick={() => setShowModal(!showModal)}
            onTap={(event, info) => {
              setTapEnd({ ...tapStart, x: info.point.x, y: info.point.y });
            }}
            onTapStart={(event, info) => {
              // tapStartFunc(info.point.x, info.point.y);
              setTapStart({ ...tapStart, x: info.point.x, y: info.point.y });
            }}
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
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        gallery={gallery}
        imageIndex={imageIndex}
      />
    </>
  );
};

const GalleryContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 350px;
  height: 30vh;
  overflow: hidden;
  border-radius: 10px;

  .FramerContainer {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    border-radius: 10px;
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
    box-shadow: 0px 0px 5px #292929;
  }

  .next {
    right: 10px;
  }

  .prev {
    left: 10px;
    transform: scale(-1);
  }
`;

const ModalContainer = styled(motion.div)`
  z-index: 10;
  position: fixed;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  .imgContainer {
    width: 90%;
    height: 90%;
    position: relative;
  }
`;

export default Gallery;
