import React from 'react';

import { Container, List, ItemsList } from '../../styles';

import Cards from '../../cards';

export default function Game() {

    // function clickCard () {
        
    // }

    return (
        <Container>
            <List>
                {Cards.map(card => 
                    <ItemsList>
                    <img src={card}/>
                    </ItemsList>)}
            </List>
        </Container>
    )
}