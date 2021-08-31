import Head from 'next/head';
import styled from 'styled-components';
import Layout, { siteTitle } from '../components/Layout.js';
import Image from 'next/image';

import Button from '../components/Button.js';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Background>
        <Image
          src="/images/CardImages/cardImg-1.jpg"
          alt="Hero Background"
          width={700}
          height={500}
          layout="fill"
          objectFit="cover"
        />
        <div className="gradiant"></div>
      </Background>

      <HomeContainer>
        <HeroText>
          <h1>Welcome To Sonics</h1>
          <p>
            A premiere Audio Visual solutions architecture provider. <br />{' '}
            <br />
            We're here to support your business with seamless digital and
            physical technical infastructure so that you can collaborate with
            colleagues and customers no matter where they are in the world
          </p>

          <div className="social">
            <div className="icon">
              <Image
                src={'/images/icons/linkedin.svg'}
                width={30}
                height={50}
                alt="linkedin"
              />
            </div>
            <div className="icon">
              <Image
                src={'/images/icons/yt.svg'}
                width={30}
                height={50}
                alt="linkedin"
              />
            </div>
            <div className="icon">
              <Image
                src={'/images/icons/fb.svg'}
                width={30}
                height={50}
                alt="linkedin"
              />
            </div>
          </div>
        </HeroText>
        <div className="button-container">
          <Button title="Contact" />
          <Button title="Projects" />
        </div>
      </HomeContainer>
    </Layout>
  );
}

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

const HomeContainer = styled.div`
  position: relative;
  padding: 2rem 0 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;

  .button-container {
    display: flex;
    gap: 15px;
  }
`;
const HeroText = styled.div`
  width: 100%;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .social {
    display: grid;
    grid-template-columns: repeat(3, 50px);
    align-items: center;
    justify-items: center;
  }
`;
