import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

function Navbar() {
  const DesktopNav = () => {
    return (
      <DesktopNavContainer>
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
              <Link href={`/`}>
                <a href="#">Home</a>
              </Link>
            </li>
            <li>
              <Link href={`/`}>
                <a href="#">Services</a>
              </Link>
            </li>
            <li>
              <Link href={`/`}>
                <a href="#">Projects</a>
              </Link>
            </li>
            <li>
              <Link href={`/`}>
                <a href="#">About</a>
              </Link>
            </li>
            <li>
              <Link href={`/`}>
                <a href="#">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        {/* <button>Contact</button> */}
      </DesktopNavContainer>
    );
  };

  const MobileNav = () => {
    const [navOpen, setnavOpen] = useState(false);
    console.log(navOpen);
    const mobileVariants = {
      visible: { opacity: 1 },
      hidden: { opacity: 0 },
      topline: {
        transform: 'rotate(45deg) Translate(10px, 10px)',
      },
      bottomline: {
        transform: 'rotate(-45deg) Translate(10px, 10px)',
      },
    };
    return (
      <MobileNavContainer>
        <div
          className="menu-burger"
          onClick={() => {
            setnavOpen(!navOpen);
          }}
        >
          <motion.div
            className="line"
            variants={mobileVariants}
            animate={navOpen ? 'topline' : ''}
          ></motion.div>
          <motion.div
            className="line"
            variants={mobileVariants}
            animate={navOpen ? 'hidden' : ''}
          ></motion.div>
          <motion.div
            className="line"
            variants={mobileVariants}
            animate={navOpen ? 'bottomline' : ''}
          ></motion.div>
        </div>

        <div className="links"></div>
      </MobileNavContainer>
    );
  };

  return (
    <div>
      <MobileNav />
      <DesktopNav />
    </div>
  );
}

const DesktopNavContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 60px;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
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
  @media (max-width: 640px) {
    display: none;
  }
`;

const MobileNavContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);

  .menu-burger {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .line {
      position: relative;
      width: 50px;
      height: 5px;
      background-color: white;
      border-radius: 100px;
      /* transform: rotate(45deg) Translate(20px, 0px); */
    }
  }
  @media (min-width: 641px) {
    display: none;
  }
`;

export default Navbar;
