import React, { useState } from 'react';
import { Container, MainInfo, LeftPannel, NameCategory, ExtraInfo, Send, Dates } from './styles'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import RentSchedulerModal from '../RentScheduler';

interface ToolProps {
    name: string;
    category: string;
    price: string;
    utility: string;
    use: string;
}

export default function ToolBox(props: ToolProps) {

    const rentAction = () => {
        /*Aqui vou ter que passar pra um state que vai ter que ser global, com as datas de inicio e fim de aluguel,
        como o RentScheduler não retorna aqui as datas, vai ter que ser stado global*/
    }

    const [expandedContainer, setExpandedContainer] = useState(false);

    const changeButton = () => {
        if (expandedContainer === true) {
            setExpandedContainer(false);
        }
        else {
            setExpandedContainer(true);
        }
    }

    return (
        <Container>
            <MainInfo>
                <LeftPannel>
                    <NameCategory>
                        <h2>{props.name}</h2>
                        <h6>{props.category}</h6>
                    </NameCategory>
                </LeftPannel>
                <h2>{props.price} CrediTools</h2>
            </MainInfo>

            <ExtraInfo className={expandedContainer ? "display" : "noDisplay"}>
                <h4><b>Utilidade: </b>{props.utility}</h4>
                <h4><b>Como usar: </b>{props.use}</h4>
            </ExtraInfo>

            <Send className={expandedContainer ? "display" : "noDisplay"}>
                <Dates>
                    <div id="date_component"> <RentSchedulerModal title="Data de início" /></div>
                    <div id="date_component"><RentSchedulerModal title="Data de devolução" /></div>
                    <button id="date_component" onClick={() => rentAction()}>Alugar</button>
                </Dates>
            </Send>

            <button type="button" className="expandedContainerButton" onClick={() => changeButton()}>
                {expandedContainer ? <RemoveIcon /> : <AddIcon />}
            </button>

        </Container>
    )
}