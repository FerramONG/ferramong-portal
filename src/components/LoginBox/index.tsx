import React, { useState } from 'react';
import { Container, Component, CreateAccount } from './styles'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function LoginBox() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
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