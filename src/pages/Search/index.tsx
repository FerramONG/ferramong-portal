import React from 'react';
import Menu from '../../components/Menu';
import ToolBox from '../../components/ToolBox';
import data from '../../data/ToolsInfo'
import { ToolsContainer } from './styles'

//let ToolsArray = [cortador,alicate];

const Home = () => {
    return (
        <React.Fragment>
            <Menu />
            <ToolsContainer>
                <ToolBox img={data.cortador.img} name={data.cortador.name} category={data.cortador.category}
                    price={data.cortador.price} utility={data.cortador.utility} use={data.cortador.use} />

                <ToolBox img={data.alicate.img} name={data.alicate.name} category={data.alicate.category}
                    price={data.alicate.price} utility={data.alicate.utility} use={data.alicate.use} />

                <ToolBox img={data.furadeira.img} name={data.furadeira.name} category={data.furadeira.category}
                    price={data.furadeira.price} utility={data.furadeira.utility} use={data.furadeira.use} />

                <ToolBox img={data.motoserra.img} name={data.motoserra.name} category={data.motoserra.category}
                    price={data.motoserra.price} utility={data.motoserra.utility} use={data.motoserra.use} />

                <ToolBox img={data.maquita.img} name={data.maquita.name} category={data.maquita.category}
                    price={data.maquita.price} utility={data.maquita.utility} use={data.maquita.use} />

                <ToolBox img={data.lima.img} name={data.lima.name} category={data.lima.category}
                    price={data.lima.price} utility={data.lima.utility} use={data.lima.use} />
            </ToolsContainer>
        </React.Fragment>
    );
}
export default Home;