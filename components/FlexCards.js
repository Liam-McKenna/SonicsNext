import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

function FlexCards() {
  const cardImages = [
    'cardImg-1.jpg',
    'cardImg-2.jpg',
    'cardImg-3.jpg',
    'cardImg-4.jpg',
  ];

  const optionHandler = (e) => {
    if (document.getElementsByClassName('active').length > 0) {
      console.log(document.getElementsByClassName('active'));
      document.getElementsByClassName('active')[0].classList.remove('active');
    }
    e.target.classList.add('active');
  };
  return (
    <FlexCardContainer>
      <div className="options">
        {cardImages.map((img, index) => {
          console.log(index);
          return (
            <div
              key={index}
              onClick={optionHandler}
              className={`option  ${index === 0 ? 'active' : ''}`}
              style={{
                // backgroundImage: `url("${img}")`,
                backgroundImage: `url("/images/CardImages/${img}")`,
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="shadow"></div>
              <div className="tag">
                <div className="icon">
                  <Image
                    src={'/images/icons/tripleDot.svg'}
                    width={30}
                    height={50}
                    alt="tripleDot"
                  />
                </div>
                <div className="description">
                  <h2>Title</h2>
                  <p>Short description of card</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </FlexCardContainer>
  );
}

const FlexCardContainer = styled.div`
  width: 100%;

  .options {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 15px;
    min-width: 300px;
    height: 400px;

    .option {
      position: relative;
      height: 100%;
      width: 50px;
      background-size: auto 120%;
      border-radius: 30px;
      background-position: center;
      display: flex;
      transition: 300ms;
      overflow: hidden;
      cursor: pointer;

      .shadow {
        position: absolute;
        opacity: 0.8;
        pointer-events: none;
        width: 100%;
        height: 50%;
        background: rgb(0, 0, 0);
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 0, 0, 0) 100%
        );
        bottom: 0;
        pointer-events: none;
      }

      .tag {
        width: 100%;
        display: flex;
        position: absolute;
        height: 50px;
        padding-left: 10px;
        left: 0px;
        bottom: 20px;
        pointer-events: none;
        .icon {
          min-width: 40px;
          max-width: 40px;
        }
        .description {
          min-width: 200px;
          max-width: 200px;
          opacity: 0;
          transition: 300ms;
          transform: translateX(20px);
        }
      }
    }

    .active {
      width: 60%;
      background-size: auto 100%;
      transform: scale(102%);

      .tag {
        .icon {
        }
        .description {
          opacity: 1;
          transform: translateX(0);
        }
      }
    }
  }
`;

export default FlexCards;
