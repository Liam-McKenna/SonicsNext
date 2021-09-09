import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
//components
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

const name = 'Your Name';
export const siteTitle = 'Sonics AVI';

export default function Layout({ children, home }) {
  return (
    <LayoutContainer>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="This is text for the page meta description"
        />
      </Head>

      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <motion.main>{children}</motion.main>
      </AnimatePresence>

      <Footer />
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div``;
