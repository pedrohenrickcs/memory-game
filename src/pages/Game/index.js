import React from 'react';

import { Container, List, ItemsList, Image } from '../../styles';

import Cards from '../../cards';

export default function Game() {

    // function clickCard () {
        
    // }

    return (
        <Container>
            <List>
                {Cards.map(card => 
                <ItemsList> 
                    <Image src={card} alt=""/>
                </ItemsList>)}
            </List>
        </Container>
    )
}