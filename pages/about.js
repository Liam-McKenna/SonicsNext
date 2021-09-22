import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
//animation
import { motion } from 'framer-motion';
import { PageTransition } from '../animations/framerAnimations.js';
//components
import ProfileCard from '../components/ProfileCard.js';
import { siteTitle } from '../components/Layout.js';
import { Separator } from '../components/elements.js';

//data
import { profilesData } from '../public/data/profiles.js';

function about() {
  return (
    <AboutContainer
      variants={PageTransition}
      initial="hidden"
      animate="enter"
      exit="exit"
      layout
    >
      <Head>
        <title>About | {siteTitle}</title>
      </Head>
      <AboutDetails>
        <h1>About</h1>
        <Separator />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed
          vulputate odio ut enim. Mauris sit amet massa vitae tortor
          condimentum. Vitae turpis massa sed elementum tempus egestas sed sed
          risus. Felis eget velit aliquet sagittis id. Lacus vestibulum sed arcu
          non odio. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl
          rhoncus. Mauris pharetra et ultrices neque ornare aenean. Eget sit
          amet tellus cras adipiscing. Vel elit scelerisque mauris pellentesque
          pulvinar. In arcu cursus euismod quis viverra nibh cras.
        </p>
      </AboutDetails>
      <AboutProfiles>
        {profilesData.map((profile) => {
          return <ProfileCard key={uuidv4()} profile={profile} />;
        })}
      </AboutProfiles>
    </AboutContainer>
  );
}

const AboutContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  /* grid-template-columns: repeat(2, 1fr); */
`;
const AboutDetails = styled.div`
  text-align: center;
`;
const AboutProfiles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 2rem;
  justify-items: center;
`;

export default about;
