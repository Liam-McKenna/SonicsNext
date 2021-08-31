import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

function Navbar() {
  return (
    <NavbarContainer>
      <div className="navbar-layout">
        <div className="logoContainer">
          <Image
            src="/images/logoWhite.png"
            alt="Logo"
            width="90"
            height="50"
          />
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      {/* <button>Contact</button> */}
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 60px;
  z-index: 10;
  .navbar-layout {
    width: 1680px;
    max-width: 90%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center; //vertical
    justify-content: center;

    .logoContainer {
      padding: 0 0 0 1rem;
    }

    ul {
      height: 100%;
      font-weight: 500;
      display: flex;
      justify-content: flex-end;
      gap: 1rem;

      li {
        height: 100%;
        transition: 0.3s;

        a {
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          &:hover {
            color: var(--color8);
          }
        }
      }
    }
  }
`;

export default Navbar;
