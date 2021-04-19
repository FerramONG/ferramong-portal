import React from 'react';
import Menu from '../../components/Menu';
import ToolBox from '../../components/ToolBox';
import data from '../../data/ToolsInfo'
import { ToolsContainer } from './styles'


const Home = () => {
    return (
        <React.Fragment>
            <Menu />
            <ToolsContainer>
                {data.map(purchase => {
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