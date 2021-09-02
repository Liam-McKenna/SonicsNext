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
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100px;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Footer;
