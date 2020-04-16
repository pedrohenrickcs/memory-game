import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #202124;
    }

    
    ul {
        list-style: none;
    }
`

export const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
`

export const Button = styled.button`
    background: transparent;
    border-radius: 10px;
    border: 2px solid palevioletred;
    color: palevioletred;
    cursor: pointer;
    font-size: 26px;
    margin: 0 1em;
    padding: 1em 2em;
    transition: color .5s ease;

    &:hover {
        background-color: palevioletred;
        color: #202124;
    }
`

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 600px;
`

export const ItemsList = styled.li`
    background-color: lightblue;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100px;
    height: 100px;
    margin: 10px;
`