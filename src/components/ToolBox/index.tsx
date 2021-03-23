import React from 'react';
import { Container, MainInfo, LeftPannel, NameCategory, ExtraInfo, Send } from './styles'

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
                        <img src={props.img} alt="cortador de grama" />
                    <NameCategory>
                        <h2>{props.name}</h2>
                        <h6>{props.category}</h6>
                    </NameCategory>
                </LeftPannel>
                <h2>{props.price} CrediTools</h2>
            </MainInfo>

            <ExtraInfo>
                <h4><b>Utilidade: </b>{props.utility}</h4>
                <h4><b>Como usar: </b>{props.use}</h4>
            </ExtraInfo>

            <Send>
                <button type="button">Quero!</button>
            </Send>
        </Container>
    )
}