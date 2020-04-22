import React, { useState, useEffect } from 'react';

import { Container, List, ItemsList, Image } from '../../styles';

import Cards from '../../cards';

export default function Game() {

    
    const [flipCard, setflipCard] = useState({
        Cards,
        flip: false
    });
    
  const useCard = (observable, initialValue) => {

      useEffect(() => {
          const newCard = flipCard({
              flip: true
          })
          
          return newCard;

      }, [observable])
  }

    return (
        <Container>
            <List>
                {Cards.map((card, index) => 
                    <ItemsList key={index} onClick={() => {
                        console.log('setflipCard(Cards)', setflipCard);
                        setflipCard(useCard);
                    }}>
                        <Image src={card}/>
                    </ItemsList>)
                }
            </List>
        </Container>
    )
}