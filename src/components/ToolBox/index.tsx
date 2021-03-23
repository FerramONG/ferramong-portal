import React from 'react';
import { Container, MainInfo, LeftPannel, ExtraInfo, Send, NameCategory } from './styles'

interface ToolProps {
    img: string;
    name: string;
    category: string;
    price: string;
    utility: string;
    use: string;
}

export default function ToolBox(props: ToolProps) {
    console.log(props);
    return (
        <Container>
            <MainInfo>
                <LeftPannel>
                    <h1><img src={props.img} alt="cortador de grama" /></h1>
                    <NameCategory>
                        <h2>{props.name}</h2>
                        <h4>{props.category}</h4>
                    </NameCategory>
                </LeftPannel>
                <h2>{props.price}</h2>
            </MainInfo>

            <ExtraInfo>
                <h3><b>{props.utility}</b></h3>
                <h3><b>{props.use}</b></h3>
            </ExtraInfo>

            <Send>
                <button>Quero</button>
            </Send>
        </Container>
    )
}