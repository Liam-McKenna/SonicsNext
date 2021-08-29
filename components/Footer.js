import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

function Footer() {
  return (
    <FooterContainer>
      <Image src="/images/logoWhite.png" width="80" height="50" />
      {/* <h3>Footer</h3> */}
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  bottom: 0;
  background-color: var(--color2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Footer;
