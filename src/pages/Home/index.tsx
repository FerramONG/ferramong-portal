import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import ToolBox from '../../components/ToolBox';
import data from '../../data/ToolsInfo'
import { ToolsContainer } from './styles'
import { useLogin} from '../../context/GlobalState'
import {useHistory} from 'react-router-dom'
import axios from 'axios'


const Home = () => {

    const { userId, setUserId, token, setToken } = useLogin();

    console.log("Está logado no HOME: "+userId + ' Com o token: '+ token);
    let history = useHistory();
    useEffect(() => {
        axios.get('https://ferramong-auth.herokuapp.com/authenticator/validateToken/' + token)
        .then(response => {
            console.log('DADOS DE RESPOSTA DA CONFIRMACAO DE TOKEN:');
            console.log(response);
        })
        .catch(error => {
            console.log('DADOS DE ERRO TOKEN:');
            console.log(error);
            //alert('Usuário não logado')
            history.push('./login');
        })
    }, []);

    const [search, setSearch] = useState('');

    const filteredTools = data.filter(tool => {
        return tool.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <React.Fragment>
            <Menu />      
                <ToolsContainer>
                <input type="text" placeholder="Pesquisar ferramenta" onChange={e => setSearch(e.target.value)} />
                    {filteredTools.map(purchase => {
                        return (
                            <ToolBox name={purchase.name} category={purchase.category}
                                price={purchase.price} utility={purchase.utility} use={purchase.use}></ToolBox>
                        )
                    })}
                </ToolsContainer>
        </React.Fragment>
    );
}
export default Home;