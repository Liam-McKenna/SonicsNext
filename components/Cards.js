import React from 'react'
import styled from 'styled-components'

function Cards() {

const cardData = [
    'cardImg-1.jpg',
    'cardImg-2.jpg',
    'cardImg-3.jpg',
    'cardImg-4.jpg',
];

    return (
        <CardsContainer>
                <div className="card">
                    card1
                </div>
                <div className="card">
                    card2
                </div>
                <div className="card">
                    card3
                </div>
                <div className="card">
                    card4
                </div>
        </CardsContainer>
    )
}

const CardsContainer = styled.div`
grid-column: span 2;
display: grid;
/* align-items: center; */
justify-items: center;
grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
gap: 1rem;
width: 100%;

.card{
    position: relative;
    width: 100%;
    height: 400px;
    background-color:var(--color9);
    
}
`;

export default Cards
