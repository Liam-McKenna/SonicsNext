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
      hidden: { opacity: 0, transform: 'Translate(-35px, 0px' },
      topline: {
        transform: 'rotate(45deg) Translate(9.3px, 9.3px)',
      },
      bottomline: {
        transform: 'rotate(-45deg) Translate(9.3px, -9.3px)',
      },
      linksShow: {
        opacity: 1,
        transition: {
          duration: 0.4,
          when: 'beforeChildren',
          staggerChildren: 0.1,
        },
      },
      linksHidden: {
        opacity: 0,

        transition: {
          duration: 0.4,
          when: 'afterChildren',
          staggerChildren: 0.1,
        },
      },
    };
    return (
      <MobileNavContainer>
        <motion.div
          className="links"
          variants={mobileVariants}
          animate={navOpen ? 'linksShow' : 'linksHidden'}
          // animate="linksHidden"
        >
          <motion.ul
          // variants={mobileVariants}
          // animate={navOpen ? 'linkBG' : ''}
          >
            <motion.li variants={mobileVariants}>
              <Link href={'#'}>
                <a>Home</a>
              </Link>
            </motion.li>
            <motion.li variants={mobileVariants}>
              <Link href={'#'}>
                <a>Services</a>
              </Link>
            </motion.li>
            <motion.li variants={mobileVariants}>
              <Link href={'#'}>
                <a>Projects</a>
              </Link>
            </motion.li>
            <motion.li variants={mobileVariants}>
              <Link href={'#'}>
                <a>About</a>
              </Link>
            </motion.li>
            <motion.li variants={mobileVariants}>
              <Link href={'#'}>
                <a>Contact</a>
              </Link>
            </motion.li>
          </motion.ul>
        </motion.div>
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

const MobileNavContainer = styled(motion.div)`
  /* width: 100%;
  height: 100%; */
  z-index: 10;
  /* display: none; */

  /* transform: Translate(-35px, 0px); */

  .menu-burger {
    z-index: 11;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 70px;
    height: 50px;
    top: 20px;
    right: 20px;
    gap: 8px;
    border: 10px solid rgba(0, 0, 0, 0);
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);
    border-radius: 10px;

    .line {
      position: relative;
      width: 100%;
      height: 5px;
      background-color: white;
      border-radius: 100px;
      /* transform: rotate(45deg) Translate(-13px, -13px); */
    }
  }
  .links {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);
    /* display: none; */

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 50px;
      text-align: center;
    }
    a {
      font-size: 40px;
      font-weight: 550;
    }

    /* transform: Translate(-35px, 0px); */
  }

  @media (min-width: 641px) {
    display: none;
  }
`;

export default Navbar;
