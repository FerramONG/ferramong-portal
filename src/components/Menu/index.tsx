import React from 'react';
import { Container, NavBar, Item, SearchBar, Login } from './styles'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import VisitSchedulerModal from '../VisitScheduler';
import Logo from '../../data/ferramong_logo.png'

export default function Menu() {
    return (
        <Container>
            <NavBar>
                <Link to='/'><img src={Logo}></img></Link>
                <Link className="link" to="/"><Item>Ferramentas</Item></Link>
                <Link className="link" to="/creditools"><Item>CrediTools</Item></Link>
                <VisitSchedulerModal userId="123456789"></VisitSchedulerModal>
                {/* <SearchBar>
                    <input type="text" placeholder="Cortador de grama..." />
                    <button type="submit"><SearchIcon/></button>
                </SearchBar> */}
                <Link className="link" to="login"><Login>Entrar</Login></Link>
            </NavBar>
        </Container>
    )
}