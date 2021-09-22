import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

function Navbar() {
  const router = useRouter();

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

          <motion.ul>
            <motion.li>
              <Link href={'/'}>
                <a>Services</a>
              </Link>

              <Line
                initial={{ width: '0%' }}
                animate={{ width: router.pathname === '/' ? '100%' : '' }}
              />
            </motion.li>
            {/* <motion.li>
              <Link href={'/services'}>
                <a>Services</a>
              </Link>
              <Line
                initial={{ width: '0%' }}
                animate={{
                  width: router.pathname === '/services' ? '100%' : '',
                }}
              />
            </motion.li> */}
            <motion.li>
              <Link href={'/projects'}>
                <a>Projects</a>
              </Link>
              <Line
                initial={{ width: '0%' }}
                animate={{
                  width: router.pathname === '/projects' ? '100%' : '',
                }}
              />
            </motion.li>
            <motion.li>
              <Link href={'/about'}>
                <a>About</a>
              </Link>
              <Line
                initial={{ width: '0%' }}
                animate={{
                  width: router.pathname === '/about' ? '100%' : '',
                }}
              />
            </motion.li>
            <motion.li>
              <Link href={'/contact'}>
                <a>Contact</a>
              </Link>
              <Line
                initial={{ width: '0%' }}
                animate={{
                  width: router.pathname === '/contact' ? '100%' : '',
                }}
              />
            </motion.li>
          </motion.ul>
        </div>
        {/* <button>Contact</button> */}
      </DesktopNavContainer>
    );
  };

  const MobileNav = () => {
    const [navOpen, setnavOpen] = useState(false);

    const mobileVariants = {
      visible: { opacity: 1 },
      hidden: { opacity: 0, transform: 'Translate(-35px, 0px' },
      topline: {
        transform: 'rotate(45deg) Translate(9.3px, 9.3px)',
      },
      bottomline: {
        transform: 'rotate(-45deg) Translate(9.3px, -9.3px)',
      },
    };

    const mobileLinks = {
      show: {
        opacity: 1,
        transition: {
          when: 'beforeChildren',
          staggerChildren: 0.1,
        },
      },
      hidden: {
        opacity: 0,
      },
    };
    return (
      <MobileNavContainer
        onClick={() => {
          setnavOpen(!navOpen);
        }}
      >
        <AnimatePresence>
          {navOpen && (
            <motion.div
              key={uuidv4()}
              className="links"
              variants={mobileLinks}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <motion.ul>
                <motion.li variants={mobileLinks}>
                  <Link href={'/'}>
                    <a>Services</a>
                  </Link>
                </motion.li>
                {/* <motion.li variants={mobileLinks}>
                  <Link href={'/services'}>
                    <a>Services</a>
                  </Link>
                </motion.li> */}
                <motion.li variants={mobileLinks}>
                  <Link href={'/projects'}>
                    <a>Projects</a>
                  </Link>
                </motion.li>
                <motion.li variants={mobileLinks}>
                  <Link href={'/about'}>
                    <a>About</a>
                  </Link>
                </motion.li>
                <motion.li variants={mobileLinks}>
                  <Link href={'/contact'}>
                    <a>Contact</a>
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>

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
      align-items: center;
      justify-content: flex-end;
      gap: 1rem;

      li {
        height: 50%;
        transition: 0.3s;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;

        a {
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
  @media (max-width: 640px) {
    display: none;
  }
`;

const MobileNavContainer = styled(motion.div)`
  z-index: 10;

  .menu-burger {
    z-index: 10;
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
    height: 100vh;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);

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
  }

  @media (min-width: 641px) {
    display: none;
  }
`;

const Line = styled(motion.div)`
  position: relative;
  bottom: 5px;
  border-radius: 200px;
  height: 3px;
  background-color: var(--color3);
`;

export default Navbar;
