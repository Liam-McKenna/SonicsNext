import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
//components
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';

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
      <main>{children}</main>
      <Footer />
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div``;
