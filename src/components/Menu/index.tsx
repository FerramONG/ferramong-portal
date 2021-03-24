import React from 'react';
import { Container, NavBar, Item, SearchBar,Login } from './styles'
import SearchIcon from '@material-ui/icons/Search';

export default function Menu() {
    return (
        <Container>
            <NavBar>
                <Item>Ferramong</Item>
                <Item>Emprestar</Item>
                <Item>CrediTools</Item>
                <SearchBar>
                    <input type="text" placeholder="Cortador de grama..." />
                    <button type="submit"><SearchIcon/></button>
                </SearchBar>
                <Login>Entrar</Login>
            </NavBar>
        </Container>
    )
}