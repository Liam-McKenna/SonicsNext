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
  const icon = {
    hidden: {
      pathLength: 0,
      fill: 'none',
    },
    visible: {
      pathLength: 1,
      fill: 'none',
      transition: { duration: 4 },
    },
  };
  const HeroText = () => {
    return (
      <HeroTextContainer>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 226.8 154"
        >
          <g>
            <motion.path
              variants={icon}
              initial="hidden"
              animate="visible"
              strokeWidth="1"
              stroke="rgba(0, 153, 255, 1)"
              d="M226.8,52.9c-1.7,6.9-2.5,14-5.5,20.6c-2.3,5-5.2,9.7-9,13.7c-1.5,1.6-2.9,3.6-4.8,0.4c-1.1-2-4.4-3.4-0.3-6.1
		c6.7-4.4,10.7-10.8,11.8-18.9c0.5-3.3,0.1-5.4-3.9-3.1c-1.7,1-3.6,1.7-5.5,2.4c-5.2,2-9.8,3.5-10.6,10.9c-0.7,6.9-7,10.9-13.1,14.1
		c-10.5,5.5-21.9,7.7-33.5,9c-4.4,0.5-8.9,1.5-14.3,0.7c10.4-3.2,20.1-5.9,29.4-9.8c6.1-2.6,12.3-5.2,17.1-10
		c5.5-5.3,5.9-10.3,1.5-16.4c-5.1-7-12-11.9-18.6-17.3c-4.2-3.4-8.7-6.7-10.5-12.3c1.5-1.2,2.2,0.3,3,0.8
		c7.1,4.9,14.8,8.8,22.4,13.1c4.7,2.6,9.2,5.5,12.2,10.1c1.4,2.1,2.9,1.6,4.7,1.2c9.2-2.4,18.3-4.7,27.5-7
		C226.8,50.3,226.8,51.6,226.8,52.9z"
            />
            <motion.path
              variants={icon}
              initial="hidden"
              animate="visible"
              strokeWidth="1"
              stroke="rgba(0, 153, 255, 1)"
              d="M164.9,0c-1.3,4.6-3,7.4-9.1,7.1c-8.7-0.5-14.9,4.7-18.6,12.6c-0.7,1.4-1.2,3-2,5
		c-0.8-10.4,5.5-19.7,15.1-23.2C151.5,0.9,161.2,0,164.9,0z"
            />
            <motion.path
              variants={icon}
              initial="hidden"
              animate="visible"
              strokeWidth="1"
              stroke="rgba(0, 153, 255, 1)"
              d="M152.9,3.9"
            />
            <motion.path
              variants={icon}
              initial="hidden"
              animate="visible"
              strokeWidth="1"
              stroke="rgba(0, 153, 255, 1)"
              d="M0,45.1c12.2-5,25-6.9,37.9-7.9c22.9-1.9,45.9-1.8,68.8,0.8c4.1,0.4,7.7,1.6,11,4.2c8.3,6.8,15.9,14.4,22.7,23
		c-5.6-2.8-11.5-5.1-16.7-8.5c-19.9-13-42.1-15.5-65.1-14.5C41.8,43,25,43.9,8.3,44.8C5.4,44.8,2.7,44.9,0,45.1z"
            />
            <motion.path
              variants={icon}
              initial="hidden"
              animate="visible"
              strokeWidth="1"
              stroke="rgba(0, 153, 255, 1)"
              d="M153,11.9c-1.3,3.7-2.3,6.4-3.2,9.2c-2.6,8.3-0.6,15.4,5.6,21.4c2.2,2.1,4.5,3.9,6.9,5.8
		c6.7,5.5,7.2,12.2,0.9,18.4c-6.2,6.2-14.2,8.4-22.4,9.9c-8.4,1.5-18.1,1.3-25.2-0.6c2.9-1.5,5.6-1.6,8.2-2.1
		c9.1-1.8,18.3-3.8,26.7-7.9c8.8-4.4,9.3-7.9,1.7-14.1c-7.2-5.9-13.1-12.2-12.5-22.5C140.1,20.8,144.8,15.8,153,11.9z"
            />
            <motion.path
              variants={icon}
              initial="hidden"
              animate="visible"
              strokeWidth="1"
              stroke="rgba(0, 153, 255, 1)"
              d="M132.1,88.5c-1.3,5.8-4.2,9.4-7.3,12.7c-7.4,7.8-16.6,13.2-26.3,17.7c-1.5,0.7-2.9,1.2-3.9,2.8
		c-6.7,10.6-20.8,24.6-32.4,32.3c0-3.1,0-5.7,0-8.4c0-1.2,0.6-1.8,1.8-2c11.8-2,16.9-10.9,20.7-20.8c1.6-4,1.3-9.3,3.9-12.1
		c2.7-2.9,8.1-0.8,12.3-1.8c9.7-2.3,17.5-7.8,24.7-14.3C127.5,92.9,129.4,91,132.1,88.5z"
            />
            <motion.path
              variants={icon}
              initial="hidden"
              animate="visible"
              strokeWidth="1"
              stroke="rgba(0, 153, 255, 1)"
              d="M39.2,88.7c8.4,7.4,17.2,5.2,25.9,2c8.6-3.2,16.4-8,24.5-12.2c3.7-1.9,7.4-3.8,12.1-3.2
		c-10.1,4.4-15.6,12.1-16.9,23.4c-2.7-2.4-1.4-5.9-3.3-8.3c-7,4.8-14.2,9.3-22.6,11.2C48.9,103.7,40.7,98.7,39.2,88.7z"
            />
            <motion.path
              variants={icon}
              initial="hidden"
              animate="visible"
              strokeWidth="1"
              stroke="rgba(0, 153, 255, 1)"
              d="M61,13.3c13.6-0.9,26.6,2.5,39.5,6.7c8.2,2.7,16,6.5,24,9.7c11.8,4.8,13.5,15.7,18,25.8
		c-1-0.2-1.2-0.1-1.3-0.2c-8.7-16.2-23.5-24-40.2-29.5C87.8,21.5,74.7,16.7,61,13.3z"
            />
            <motion.path
              variants={icon}
              initial="hidden"
              animate="visible"
              strokeWidth="1"
              stroke="rgba(0, 153, 255, 1)"
              d="M160,12.8c11.1,12.1,14.7,14.5,27.3,18.4c-3.2,6.7-5,7.3-10.9,3.4C168.9,29.7,162.4,21.2,160,12.8z"
            />
          </g>
        </svg>

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
  svg {
    max-height: 200px;
    /* max-width: 250px; */
  }
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
