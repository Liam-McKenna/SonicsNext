import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  const projCardVariants = {
    on: {},
    off: {},
  };

  return (
    <ProjectCardContainer
      whileHover={{
        scale: 1.05,
      }}
    >
      <motion.div
        className="imgContainer"
        whileHover={{
          scale: 1.1,
          clipPath: 'polygon(0 0, 100% 0, 100% 95%, 0 100%)',
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: imageIsLoaded ? 1 : 0 }}
        >
          <Image
            src={`/images/projects/${project.thumbnail}`}
            alt={project.thumbnail}
            layout="fill"
            objectFit="cover"
            onLoad={(event) => {
              const target = event.target;
              if (target.src.indexOf('data:image/gif;base64') < 0) {
                setImageIsLoaded(true);
              }
            }}
          />
        </motion.div>
        <motion.div
          whileHover={{
            opacity: 0,
          }}
          className="overlay"
        ></motion.div>
      </motion.div>
      <div className="descriptContainer">
        <div className="textContainer">
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>
        <div className="tags">
          {project.tags.map((tag) => {
            return (
              <div className="tag" key={tag}>
                {tag}
              </div>
            );
          })}
        </div>
      </div>
    </ProjectCardContainer>
  );
};

const ProjectCardContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  max-width: 400px;
  width: 100%;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  overflow: hidden;
  .imgContainer {
    /* display: block; */
    position: relative;
    width: 100%;
    height: 70%;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);

    .overlay {
      position: absolute;
      background-color: #00a2ff;
      mix-blend-mode: screen;
      width: 100%;
      height: 100%;
    }
  }
  .descriptContainer {
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    text-align: center;
    position: relative;
  }
  p {
    color: #a7a7a7;
  }

  .tags {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 0.5rem;
    .tag {
      border: 1px solid white;
      padding: 5px 8px 5px 8px;
      border-radius: 100px;
      font-size: 60%;
    }
  }

  /* :hover {
    .overlay {
      background-color: transparent;
      mix-blend-mode: unset;
    }
  } */
`;

export default ProjectCard;
