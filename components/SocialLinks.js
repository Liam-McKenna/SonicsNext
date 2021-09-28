import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
//images
import fb from '../public/images/icons/fb.svg';
import lkdn from '../public/images/icons/linkedin.svg';

function SocialLinks() {
  return (
    <SocialContainer>
      <Link href="https://www.facebook.com/SonicsAVI/">
        <Image src={fb} height="15" width="15" />
      </Link>
      <Link href="https://www.linkedin.com/company/sonics-audio-visual-integrators/">
        <Image src={lkdn} height="15" width="15" />
      </Link>
    </SocialContainer>
  );
}

const SocialContainer = styled.div`
  width: 50px;
  display: flex;
  /* align-items: flex-end; */
  justify-content: flex-end;
  gap: 0.5rem;
`;
export default SocialLinks;
