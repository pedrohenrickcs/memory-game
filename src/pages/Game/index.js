import React, { useState, useEffect } from 'react';

import { Container, List, ItemsList, Image } from '../../styles';

import Cards from '../../cards';

export default function Game() {

    const [cards, setCards] = useState({
        noFlipped: false
    });

    useEffect(() => {
        setCards(Cards);
    }, [])

    function handleCard(index) {

        const newCards = Cards.map(c => {
            return {c, index, noFlipped: true}
        })
        
        setCards(newCards);
        console.log('newCards', newCards);
        
    }


    return (
        <Container>
            <List>
                {Cards.map((card, index) => 
                    <ItemsList key={index} onClick={handleCard}> 
                        <Image src={card}/>
                    </ItemsList>)
                }
            </List>
        </Container>
    )
}