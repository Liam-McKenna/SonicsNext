import React from 'react';
import { servicesData } from '../../public/data/services.js';
import styled from 'styled-components';
//components
import Gallery from '../../components/Gallery.js';

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
      <Gallery gallery={service.gallery} />
      <div className="information"></div>
      <h2>{service.name}</h2>
    </ServiceContainer>
  );
}

const ServiceContainer = styled.div`
  .information {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export default Service;
