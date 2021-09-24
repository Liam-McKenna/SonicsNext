import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

//animation
import { motion } from 'framer-motion';
import { PageTransition } from '../animations/framerAnimations.js';
//components
import { siteTitle } from '../components/Layout.js';
import Button from '../components/Button.js';
import ServiceCard from '../components/ServiceCard.js';
import { Separator } from '../components/elements.js';
//data
import { servicesData } from '../public/data/services.js';

export default function Home() {
  const HeroText = () => {
    return (
      <HeroTextContainer>
        <h1>Welcome To Sonics AVI</h1>
        <p>
          A premiere Audio Visual solutions architecture provider. <br />
          <br />
          We&#39;re here to support your business with seamless digital and
          physical technical infastructure integration so that you can
          collaborate with colleagues and customers no matter where they are in
          the world.
        </p>

        <HeroAction />
      </HeroTextContainer>
    );
  };

  const HeroAction = () => {
    return (
      <HeroActionContainer>
        <Button title="Contact Us" link="/contact" />
        <Button title=" Our Projects" link="/projects" />
      </HeroActionContainer>
    );
  };

  return (
    <motion.div
      variants={PageTransition}
      initial="hidden"
      animate="enter"
      exit="exit"
      layout
    >
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <HomeContainer>
        <HeroText />
        {/* <HeroAction /> */}
      </HomeContainer>
      <Separator />
      <ServicesContainer>
        {Object.keys(servicesData).map((data) => {
          return (
            <ServiceCard
              title={servicesData[data]['name']}
              img={servicesData[data]['img']}
              slug={servicesData[data]['slug']}
              key={uuidv4()}
            />
          );
        })}
      </ServicesContainer>
      <Separator />
    </motion.div>
  );
}

const HomeContainer = styled.div`
  position: relative;
  padding: 2rem 0 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
`;
const HeroTextContainer = styled.div`
  width: 100%;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    max-width: 600px;
  }

  .social {
    display: grid;
    grid-template-columns: repeat(3, 50px);
    align-items: center;
    justify-items: center;
  }
`;
const HeroActionContainer = styled.div`
  display: flex;
  gap: 15px;
  margin: 1rem;
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
