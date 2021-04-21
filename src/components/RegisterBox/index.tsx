import React from 'react';
import { Container, Component,} from './styles'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function LoginBox() {

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <Container>
            <Component>
                <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="CPF" {...register("cpf")}/>
                        <input type="password" placeholder="Senha" {...register("senha")}/>
                        {/*<Link to={"/"}>*/}<input type="submit" value="Cadastrar-se" id="button"/> {/*</Link> com esse link pra outra página nao funcionava no console,tem que ver se na api vai*/}
                </form>
            </Component>
        </Container>
    )
}