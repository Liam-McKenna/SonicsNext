import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import { PageTransition } from '../../animations/framerAnimations.js';
//data
import { servicesData } from '../../public/data/services.js';
import { projectsData } from '../../public/data/projects.js';

//components
import Gallery from '../../components/Gallery.js';
import ProjectCard from '../../components/ProjectCard.js';
import { siteTitle } from '../../components/Layout.js';

export const getStaticProps = async (context) => {
  let id = context.params.id;
  let service = servicesData.filter((service) => service.slug == id);
  service = service[0];
  return {
    props: { service },
  };
};

export const getStaticPaths = async () => {
  const paths = servicesData.map((service) => {
    return {
      params: { id: service.slug },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

function Service({ service }) {
  return (
    <ServiceContainer
      variants={PageTransition}
      initial="hidden"
      animate="enter"
      exit="exit"
      layout
    >
      <Head>
        <title>
          {service.name} | {siteTitle}
        </title>
      </Head>

      <div className="galleryContainer">
        <Gallery gallery={service.gallery} />
      </div>
      <div className="information">
        <h1>{service.name}</h1>
        <div className="longDescription">
          {service.longDescription.map((paragraph) => {
            return (
              <div key={uuidv4()}>
                <div className="paragraphSection">
                  <h2>{paragraph.title}</h2>
                  <div className="line"></div>
                  <p>{paragraph.paragraph}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relatedProjects">
        <h1>Related Projects</h1>
        <div className="cardsContainer">
          {projectsData.map((project) => {
            return project.catagory.includes(service.name) ? (
              <ProjectCard key={uuidv4()} project={project} />
            ) : null;
          })}
        </div>
      </div>
    </ServiceContainer>
  );
}

const ServiceContainer = styled(motion.div)`
  .information {
    width: 100%;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: center;
    h1 {
      text-align: center;
    }
    .longDescription {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 1rem;

      .paragraphSection {
        h2 {
          color: var(--color3);
          /* padding: 0rem 0 1rem 0; */
        }
        .line {
          width: 80%;
          height: 1px;
          margin: 1rem 0 1rem 0;
          background-color: var(--color3);
          border-radius: 10px;
        }

        background-color: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(1.5px);
        border-radius: 10px;
        padding: 1rem;
      }
    }
  }
  .relatedProjects {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .cardsContainer {
      display: grid;
      width: 100%;
      justify-items: center;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
    }
  }

  .galleryContainer {
  }
`;

export default Service;
