import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import ToolBox from '../../components/ToolBox';
import data from '../../data/ToolsInfo'
import { ToolsContainer } from './styles'
import { useLogin} from '../../context/GlobalState'


const Home = () => {

    const { userId, setUserId, token, setToken } = useLogin();

    console.log("Está logado no HOME: "+userId + ' Com o token: '+ token);

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