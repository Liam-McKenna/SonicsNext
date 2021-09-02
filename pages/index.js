import Head from 'next/head';
import styled from 'styled-components';
import Layout, { siteTitle } from '../components/Layout.js';
import Image from 'next/image';

//components
import Button from '../components/Button.js';
import Cards from '../components/Cards.js';

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

        {/* <div className="social">
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
        </div> */}
        <HeroAction />
      </HeroTextContainer>
    );
  };

  const HeroAction = () => {
    return (
      <HeroActionContainer>
        <Button title="Request A Demo" />
        {/* <Button title="Projects" /> */}
      </HeroActionContainer>
    );
  };

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Background>
        <div className="top-bg"></div>
        <Image
          src="/images/CardImages/cardImg-1.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="gradiant"></div>
      </Background>
      <FooterBackground>
        <div className="top-bg"></div>
        <Image
          src="/images/CardImages/cardImg-4.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="gradiant"></div>
      </FooterBackground>
      <HomeContainer>
        <HeroText />
        {/* <HeroAction /> */}
      </HomeContainer>
      <Cards />
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
