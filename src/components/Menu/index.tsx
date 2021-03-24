import React from 'react';
import { Container, NavBar, Item, SearchBar,Login } from './styles'

export default function Menu() {
    return (
        <Container>
            <NavBar>
                <Item>Ferramong</Item>
                <Item>Emprestar</Item>
                <Item>CrediTools</Item>
                <SearchBar>
                    <input type="text" placeholder="Cortador de grama..." />
                    {/* <img src="search3.png" id="btnBusca" alt="Buscar" /> */}
                </SearchBar>
                <Login>Entrar</Login>
            </NavBar>
        </Container>
    )
}