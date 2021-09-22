import React from 'react';
import Head from 'next/head';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PageTransition } from '../../animations/framerAnimations.js';
//data
import { projectsData } from '../../public/data/projects.js';
import { servicesData } from '../../public/data/services.js';
//components
import Gallery from '../../components/Gallery.js';
import ServiceCard from '../../components/ServiceCard.js';
import { siteTitle } from '../../components/Layout.js';

export const getStaticProps = async (context) => {
  let id = context.params.id;
  let project = projectsData.filter((project) => project.slug == id);
  project = project[0];
  let services = servicesData.filter((service) =>
    project.catagory.includes(service.name)
  );
  return {
    props: { project, services },
  };
};

export const getStaticPaths = async () => {
  const paths = projectsData.map((project) => {
    return {
      params: { id: project.slug },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

function Project({ project, services }) {
  console.log(services);
  return (
    <ProjectContainer
      variants={PageTransition}
      initial="hidden"
      animate="enter"
      exit="exit"
      layout
    >
      <Head>
        <title>
          {project.name} | {siteTitle}
        </title>
      </Head>

      <Gallery gallery={project.gallery} />
      <div className="titleContainer">
        <h1>{project.name}</h1>
        <ul>
          {project.tags.map((tag) => {
            return <li key={uuidv4()}>{tag}</li>;
          })}
        </ul>
      </div>
      <p>{project.longDescription}</p>
      <h2>Related Services</h2>
      <ServicesContainer>
        {services.map((service) => {
          return (
            <ServiceCard
              title={service['name']}
              img={service['img']}
              slug={service['slug']}
              key={uuidv4()}
            />
          );
        })}
      </ServicesContainer>
    </ProjectContainer>
  );
}

const ProjectContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 2rem;
  .titleContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ul {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    li {
      border: 1px solid white;
      border-radius: 100px;
      padding: 1px 5px 1px 5px;
    }
  }
`;

const ServicesContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 1rem;
  width: 100%;

  @media (max-width: 780px) {
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  }
`;

export default Project;
