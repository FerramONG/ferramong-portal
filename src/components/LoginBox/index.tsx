import React,{useEffect} from 'react';
import { Container, Component, CreateAccount } from './styles'
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios'
//import GlobalState from '../../context/GlobalState';
import { useLogin } from '../../context/GlobalState'

export default function LoginBox() {
    const { userId, setUserId, token, setToken } = useLogin();

    useEffect(() => {
        
    }, []);
    console.log("Está logado no LOGIN: " + userId + ' Com o token: ' + token);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const history = useHistory();

    const onSubmit = (data) => {
        console.log('DADOS ENVIADOS PRA API:');
        console.log(data);

        axios.post('https://ferramong-auth.herokuapp.com/authenticator/login', {
            cpf: data.cpf,
            password: data.password,
        })
            .then(response => {
                console.log('DADOS DE RESPOSTA LOGIN:');
                console.log(response);
                history.push('./')
                setUserId(response.data.id)
                setToken(response.data.token)
            })
            .catch(error => {
                console.log('DADOS DE ERRO:');
                console.log(error);
            })
    }


    return (
        <Container>
            <Component>
                <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="CPF" {...register("cpf", { required: true })} />
                    {errors.cpf && errors.cpf.type === "required" && <span>Indique seu cpf</span>}
                    <input type="password" placeholder="Senha" {...register("password", { required: true })} />
                    {errors.password && errors.password.type === "required" && <span>Indique sua senha</span>}
                    {/*<Link to={"/"}>*/}<input type="submit" value="Entrar" id="button" /> {/*</Link> com esse link pra outra página nao funcionava no console,tem que ver se na api vai*/}
                </form>
                <CreateAccount>
                    <h3>Não possui uma conta ainda? Cadastre-se <Link to="/register">aqui</Link> </h3>
                    <h3>Esqueceu sua senha? Clique <Link to="/forgotpassword">aqui</Link></h3>
                </CreateAccount>
            </Component>
        </Container>
    )
}