"use client"

import Form from "@/components/Form"

export default function Home() {

    function login() {
        console.log("Apretaste el boton de login")
    }

    //Siempre un componente tiene que devolver una etiqueta html
    return(
        <>
                <h1>Home</h1>
                <Form text="Titulo Form" textBtn1="Login" onClickBtn1={login} textBtn2="Registrar" />
                <Form text="Titulo Form" textBtn1="Login" textBtn2="Registrar" />
                <Form text="Titulo Form" textBtn1="Login" textBtn2="Registrar" />
                <Form text="Titulo Form" textBtn1="Login" textBtn2="Registrar" />
        </>
    )
}