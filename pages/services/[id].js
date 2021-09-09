import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { servicesData } from '../../public/data/services.js';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
//data
import { projects } from '../../public/data/projects.js';
//components
import Gallery from '../../components/Gallery.js';
import ProjectCard from '../../components/ProjectCard.js';

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
    <ServiceContainer>
      <Head>
        <title>Sonics Avi {service.name}</title>
      </Head>

      <Background>
        <Image
          src={`/images/services/gallery/${service.gallery[0]}`}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="gradiant"></div>
      </Background>
      <FooterBackground>
        <Image
          src={`/images/services/gallery/${service.gallery[2]}`}
          alt="footer Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="gradiant"></div>
      </FooterBackground>

      <Gallery gallery={service.gallery} />
      <div className="information">
        <h1>{service.name}</h1>
        <div className="longDescription">
          {service.longDescription.map((paragraph) => {
            return (
              <p key={uuidv4()}>
                {paragraph}
                <br />
                <br />
              </p>
            );
          })}
        </div>
      </div>
      <div className="relatedProjects">
        {projects.map((project) => {
          return project.catagory.includes(service.name) ? (
            <ProjectCard key={uuidv4()} project={project} />
          ) : null;
        })}
      </div>
    </ServiceContainer>
  );
}

const ServiceContainer = styled.div`
  .information {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    .longDescription {
      text-align: center;
    }
  }

  .relatedProjects {
    display: grid;
    width: 100%;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 500px;
  top: 0;
  left: 0;
  .gradiant {
    position: absolute;
    width: 100%;
    height: 500px;
    background: var(--background-color);
    background: linear-gradient(
      0deg,
      var(--background-color) 21%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }
`;
const FooterBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 500px;
  bottom: 0;
  left: 0;
  .gradiant {
    position: absolute;
    width: 100%;
    height: 500px;
    background: var(--background-color);
    background: linear-gradient(
      180deg,
      var(--background-color) 21%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;

export default Service;
