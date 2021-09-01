import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { servicesData } from '../public/data/services.js';
import { v4 as uuidv4 } from 'uuid';

function Cards() {
  const Card = ({ title, img }) => {
    return (
      <CardContainer>
        <Image
          layout="fill"
          objectFit="cover"
          src={`/images/CardImages/${img}`}
        />
        <div className="gradiant"></div>
        <h2>{title}</h2>
      </CardContainer>
    );
  };

  return (
    <CardsContainer>
      {Object.keys(servicesData).map((data) => {
        return (
          <Card
            title={servicesData[data]['name']}
            img={servicesData[data]['img']}
            key={uuidv4()}
          />
        );
      })}
    </CardsContainer>
  );
}

const CardsContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 1rem;
  width: 100%;

  @media (max-width: 780px) {
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  }
`;

const CardContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 200px;
  max-height: 200px;
  border-radius: 10px;
  overflow: hidden;

  .gradiant {
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8) 20%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }
  h2 {
    position: absolute;
  }
`;

export default Cards;
