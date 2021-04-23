import React from 'react';
import { Container, NavBar, Item, Login } from './styles'
//import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import VisitSchedulerModal from '../VisitScheduler';
import Logo from '../../data/ferramong_logo.png'

export default function Menu() {
    return (
        <Container>
            <NavBar>
                <Link to='/'><img src={Logo} alt='logo ferramong'></img></Link>
                <Link className="link" to="/"><Item>Ferramentas</Item></Link>
                <Link className="link" to="/creditools"><Item>CrediTools</Item></Link>
                <VisitSchedulerModal/>
                <Link className="link" to="login"><Login>Entrar</Login></Link>
            </NavBar>
        </Container>
    )
}