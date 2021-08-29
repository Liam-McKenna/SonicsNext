import Head from "next/head";
import styled from "styled-components";
import Layout, { siteTitle } from "../components/Layout.js";
import Image from "next/image";

import FlexCards from "../components/FlexCards.js";
import Cards from "../components/Cards.js";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HomeContainer>
        <HeroText>
          <h1>Welcome To Sonics</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            elementum magna non ipsum malesuada, euismod interdum mauris
            feugiat. Phasellus nec ultrices neque. <br /> <br />
            Ut risus lectus, tristique vitae leo nec, feugiat rutrum diam. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>

          <div className="social">
            <div className="icon">
              <Image
                src={"/images/icons/linkedin.svg"}
                width={30}
                height={50}
                alt="linkedin"
              />
            </div>
            <div className="icon">
              <Image
                src={"/images/icons/yt.svg"}
                width={30}
                height={50}
                alt="linkedin"
              />
            </div>
            <div className="icon">
              <Image
                src={"/images/icons/fb.svg"}
                width={30}
                height={50}
                alt="linkedin"
              />
            </div>
          </div>
        </HeroText>
        <FlexCards />
      </HomeContainer>
      <Cards />
    </Layout>
  );
}

const HomeContainer = styled.div`
  /* min-height: 500px; */
  padding: 2rem 0 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
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
