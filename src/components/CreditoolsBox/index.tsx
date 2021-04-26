import React,{useEffect, useState} from 'react';
import { Container, Component, Table, CreditCard } from './styles'
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import data from '../../data/CreditoolsInfo'
import axios from 'axios'
import { useLogin } from '../../context/GlobalState'

const CreditoolsBox = () => {
    const { userId, setUserId, token, setToken } = useLogin();
    const history = useHistory();
    const [userPurchases, setUserPurhcases] = useState([]);
    useEffect(() => {
        axios.get('https://ferramong-auth.herokuapp.com/authenticator/validateToken/' + token)
        .then(response => {
            console.log('DADOS DE RESPOSTA DA CONFIRMACAO DE TOKEN:');
            console.log(response);
        })
        .catch(error => {
            console.log('DADOS DE ERRO TOKEN:');
            console.log(error);
            alert('Usuário não logado')
            history.push('./login');
        })

        axios.get('https://ferramong-pay.herokuapp.com/purchases/creditools/dweller/' + userId)
        .then(response => {
            console.log('------DADOS DE COMPRAS DO USUÁRIO:-----');
            console.log(response.data);
            setUserPurhcases(response.data)
        })
        .catch(error => {
            console.log('DADOS DE ERRO COMPRAS:');
            console.log(error);
        })
    }, []);
    console.log("Está logado no CREDITOOLS: " + userId + ' Com o token: ' + token);

    const {register, handleSubmit, formState: { errors }} = useForm();
    let cardUser = {
        number: '',
        cvv: 0,
        owner: ''
    };

    const onSubmit = (data) => {
        console.log('-----DADOS DO CARTÂO------')
        console.log(data)
        cardUser.number = data.cardNumber
        cardUser.cvv = parseInt(data.cardCvv)
        cardUser.owner = data.cardOwner
        console.log('-----Card-----')
        console.log(cardUser)

        axios.post('https://ferramong-pay.herokuapp.com/buy/creditools/credit', {
            idDweller: userId,
            cardNumber:data.cardNumber,
            cardCvv: parseInt(data.cardCvv),
            cardOwner: data.cardOwner,
            value: parseInt(data.value),
            card: cardUser
        })
            .then(response => {
                console.log('RESPOSTA DO ENVIO DO PAGAMENTO')
                console.log(response)
                alert('Compra feita com sucesso!')
            })
            .catch(error => {
                console.log('DEU ERRO NO PAGAMENTO')
                console.log(error)
                alert('Ocorreu um erro em sua compra...')
            })
    }

    const [price, setPrice] = useState(0);

    const onPrice = (data) => {
        let valueToPay = data/10;
        setPrice(valueToPay)
    }

    return (
        <Container>
            <Component>
                <h2>Saldo atual: XXXX Creditools</h2>
                <h1>Histórico de compras</h1>

                <Table>
                    <tbody>
                        <tr>
                            <td>Quantidade adquirida</td>
                            <td>Data</td>
                        </tr>
                        {
                            userPurchases.map(purchase => {
                                const date = new Date(purchase['date'])
                                const month = '' + (date.getMonth() + 1)
                                const day = '' + date.getDate()
                                const year = date.getFullYear();
                                return(
                                    <tr>
                                        <td>{purchase['total']} Creditools</td>
                                        <td>{day + ' / ' + month + ' / ' + year}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>

                <CreditCard onSubmit={handleSubmit(onSubmit)}>
                    <h1>Comprar créditos</h1>
                    <div>
                        <input type="text" id="cardOwner" placeholder="Nome Completo" {...register("cardOwner", { required: true })} />
                        {errors.cardOwner && errors.cardOwner.type === "required"}
                        <input type="text" id="cpf" placeholder="CPF" {...register("cpf", { required: true })} />
                        {errors.cpf && errors.cpf.type === "required"}
                    </div>
                    <div>
                        <input type="text" id="number" placeholder="Número do cartão" {...register("cardNumber", { required: true })} />
                        <input type="text" id="date" placeholder="Validade" {...register("date", { required: true })} />
                        <input type="text" id="cvv" placeholder="CVV" {...register("cardCvv", { required: true })}/>
                    </div>
                    <div>
                        <input type="text" id="quantity" placeholder="Quantidade" {...register("value", { required: true })} onChange={e => onPrice(e.target.value)}/>
                        <span>R$ {price}</span>
                        {/* <input type="radio" value="Credit">Crédito</input>
                        <input type="radio" value="Debit">Débito</input> */}
                        
                    </div>
                
                    <button type="submit" className="expandedContainerButton" >
                        Adicionar Creditools
                    </button>
                </CreditCard>
            </Component>

        </Container >
    );
}
export default CreditoolsBox;