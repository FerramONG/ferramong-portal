import React, { useState } from 'react';
import { Container, MainInfo, LeftPannel, NameCategory, ExtraInfo, Send, Dates } from './styles'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import AddToolSchedulerStart from '../AddToolSchedulerStart';
import AddToolSchedulerEnd from '../AddToolSchedulerEnd';
import { useLogin } from '../../context/GlobalState'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

interface ToolProps {
    name: string;
    category: string;
    ownerId: number;
    price: string;
    utility: string;
    use: string;
    toolId: number;
    availableUntil: string;
}

export default function ToolBox(props: ToolProps) {
    const { userId, setUserId, token, setToken, startDateTool, setStartDateTool, endDateTool, setEndDateTool } = useLogin();
    let history = useHistory();
    let ownerId = props.ownerId;
    let rentedToolId = props.toolId

    const rentAction = () => {
        axios.get('https://ferramong-auth.herokuapp.com/authenticator/validateToken/' + token)
            .then(response => {
                console.log('DADOS DE RESPOSTA DA CONFIRMACAO DE TOKEN:');
                console.log(response);
            })
            .catch(error => {
                console.log('DADOS DE ERRO TOKEN:');
                console.log(error);
                alert('Necessário estar logado para alugar uma ferramenta')
                history.push('./login');
            })
        axios.post('https://ferramong-tools-manager.herokuapp.com/rentals', {
            ownerDwellerId: ownerId,
            renterDwellerId: userId,
            toolId: rentedToolId,
            returnDate: endDateTool,
        })
            .then(response => {
                console.log('RESPOSTA DO ALUGAR FERRAMENTA: ');
                console.log(response);

            })
            .catch(error => {
                console.log('ERRO DO ALUGAR FERRAMENTA: ');
                console.log(error);
            })

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
                <h4><b>Disponível até: </b>{props.availableUntil}</h4>
            </ExtraInfo>

            <Send className={expandedContainer ? "display" : "noDisplay"}>
                <Dates>
                    <div id="date_component"> <AddToolSchedulerStart title="Data de início" /></div>
                    <div id="date_component"><AddToolSchedulerEnd title="Data de devolução" /></div>
                    <button id="date_component" onClick={() => rentAction()}>Alugar</button>
                </Dates>
            </Send>

            <button type="button" className="expandedContainerButton" onClick={() => changeButton()}>
                {expandedContainer ? <RemoveIcon /> : <AddIcon />}
            </button>

        </Container>
    )
}