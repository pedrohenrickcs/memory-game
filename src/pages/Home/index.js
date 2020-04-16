import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Button } from '../../styles';

export default function Home() {
    return (
        <Container>
            <Link to="/game">
                <Button>Jogar</Button>
            </Link>
        </Container>
    )
}