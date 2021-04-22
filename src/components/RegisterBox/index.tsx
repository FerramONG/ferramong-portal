import React from 'react';
import { Container, Component,} from './styles'
import { Link,useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function LoginBox() {

    const {register, handleSubmit, formState: { errors }} = useForm();

    const history = useHistory();

    const onSubmit = (data) => {
        console.log('DADOS ENVIADOS PRA API:');
        console.log(data);

        axios.post('https://ferramong-auth.herokuapp.com/accountManager/signUp',{
            cpf: data.cpf,
            name: data.name,
            password: data.password,
            secretQuestion: data.secretQuestion,
            secretAnswer: data.secretAnswer,
        })
        .then(response => {
            console.log('DADOS DE RESPOSTA:');
            console.log(response);
            history.push('./');
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
                        <input type="text" placeholder="CPF" {...register("cpf", { required: true })}/>
                        {errors.cpf && errors.cpf.type === "required" && <span>Necessário ter um cpf</span>}
                        <input type="text" placeholder="Nome" {...register("name", { required: true })}/>
                        {errors.name && errors.name.type === "required" && <span>Indique seu nome</span>}
                        <input type="password" placeholder="Senha" {...register("password", { required: true })}/>
                        {errors.password && errors.password.type === "required" && <span>Indique uma senha</span>}
                        <input type="text" placeholder="Pergunta secreta" {...register("secretQuestion", { required: true })}/>
                        {errors.secretQuestion && errors.secretQuestion.type === "required" && <span>Indique pergunta secreta</span>}
                        <input type="text" placeholder="Resposta secreta" {...register("secretAnswer", { required: true })}/>
                        {errors.secretAnswer && errors.secretAnswer.type === "required" && <span>Indique resposta secreta</span>}
                        {/*<Link to={"/"}>*/}<input type="submit" value="Cadastrar-se" id="button"/> {/*</Link> com esse link pra outra página nao funcionava no console,tem que ver se na api vai*/}
                </form>
            </Component>
        </Container>
    )
}