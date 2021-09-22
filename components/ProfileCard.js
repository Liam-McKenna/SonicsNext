import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
//components
import { Separator } from '../components/elements.js';

function ProfileCard({ profile }) {
  return (
    <ProfileCardContainer>
      <div className="imgContainer">
        <Image src={`/${profile.img}`} layout="fill" objectFit="cover" />
      </div>
      <h2>{profile.name}</h2>
      <p>{profile.title}</p>
      <Separator />
      <p>{profile.description}</p>
      {profile.email && (
        <a href={`mailto:test@email.com`}>
          <button>Email</button>
        </a>
      )}
    </ProfileCardContainer>
  );
}

const ProfileCardContainer = styled.div`
  width: 100%;
  height: 380px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  text-align: center;
  .imgContainer {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    overflow: hidden;
  }
  button {
    background: none;
    padding: 4px 10px 4px 10px;
    margin-top: 20px;
    border: 2px solid white;
    border-radius: 100px;
  }
`;

export default ProfileCard;
