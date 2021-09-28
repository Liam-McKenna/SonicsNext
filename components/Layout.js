import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
//components
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

export const siteTitle = 'Sonics AVI';

export default function Layout({ children, home }) {
  return (
    <LayoutContainer>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="This is text for the page meta description"
        />
      </Head>
      <Navbar />
      <PatternBackground></PatternBackground>

      <TopBackground>
        <Image
          src="/images/services/serviceThumb1.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
        />

        <div className="gradiant"></div>
      </TopBackground>
      <FooterBackground>
        <Image
          src="/images/projects/gallery/project3Gal1.jpg"
          alt="footer Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="gradiant"></div>
      </FooterBackground>
      <AnimatePresence exitBeforeEnter>
        <motion.main>{children}</motion.main>
      </AnimatePresence>

      <Footer />
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; */
  main {
    position: relative;
    z-index: 1;
  }
`;
const PatternBackground = styled.div`
  background-image: url('/images/layout/topography.svg');
  background-repeat: repeat;
  position: absolute;
  z-index: -20;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
`;

const TopBackground = styled.div`
  position: absolute;
  z-index: -5;
  width: 100%;
  height: 500px;
  top: 0;
  left: 0;
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 21%, transparent 100%);
`;
const FooterBackground = styled.div`
  z-index: -5;
  position: absolute;
  width: 100%;
  height: 500px;
  bottom: 0;
  left: 0;
  mask-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 21%, transparent 100%);
`;
