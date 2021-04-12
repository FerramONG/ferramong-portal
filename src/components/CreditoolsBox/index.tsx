import React, { useState } from 'react';
import { Container, Component } from './styles'

const CreditoolsBox = () => {

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
            <Component>
                <h2>Saldo atual: 5000 Creditools</h2>
                <h2>Histórico de compras</h2>

                <table>
                    <tr>
                        <td>Quantidade adquirida</td>
                        <td>Valor gasto</td>
                        <td>Data</td>
                    </tr>
                    <tr>
                        <td>100 Creditools</td>
                        <td>R$10,00</td>
                        <td>22/03/2019</td>
                    </tr>
                    <tr>
                        <td>100 Creditools</td>
                        <td>R$10,00</td>
                        <td>22/03/2019</td>
                    </tr>
                    <tr>
                        <td>100 Creditools</td>
                        <td>R$10,00</td>
                        <td>22/03/2019</td>
                    </tr>
                    <tr>
                        <td>100 Creditools</td>
                        <td>R$10,00</td>
                        <td>22/03/2019</td>
                    </tr>
                </table>

                <button type="button" className="expandedContainerButton" onClick={() => changeButton()}>
                    Adicionar Creditools
                </button>
            </Component>

        </Container>
    );
}
export default CreditoolsBox;