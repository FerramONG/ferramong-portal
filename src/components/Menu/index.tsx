import React from 'react';
import { Container, NavBar, Item, SearchBar,Login } from './styles'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import VisitSchedulerModal from '../VisitScheduler';

export default function Menu() {
    return (
        <Container>
            <NavBar>
            <Link className="link" to="/"><Item>Ferramong</Item></Link>
            <Link className="link" to="/search"><Item>Ferramentas</Item></Link>
            <Link className="link" to="/search"><Item>CrediTools</Item></Link>
            <VisitSchedulerModal userId = "123"></VisitSchedulerModal>
                <SearchBar>
                    <input type="text" placeholder="Cortador de grama..." />
                    <button type="submit"><SearchIcon/></button>
                </SearchBar>
                <Link className="link" to="search"><Login>Entrar</Login></Link>
            </NavBar>
        </Container>
    )
}