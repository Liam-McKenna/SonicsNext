import React from 'react';
import Head from 'next/head';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { motion } from 'framer-motion';

//components
import ProjectCard from '../../components/ProjectCard.js';
import { PageTransition } from '../../animations/framerAnimations.js';
import { Separator } from '../../components/elements.js';
import { siteTitle } from '../../components/Layout.js';

//data
import { projectsData } from '../../public/data/projects.js';

function index() {
  return (
    <ProjectsContainer
      variants={PageTransition}
      initial="hidden"
      animate="enter"
      exit="exit"
      layout
    >
      <Head>
        <title>Projects | {siteTitle}</title>
      </Head>
      <Intro>
        <h1>Projects</h1>
        <Separator />
      </Intro>
      <CardsContainer>
        {projectsData.map((project) => {
          return <ProjectCard key={uuidv4()} project={project} />;
        })}
      </CardsContainer>
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled(motion.div)`
  display: grid;
  gap: 1rem;
`;
const Intro = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  gap: 1rem;
`;

export default index;
