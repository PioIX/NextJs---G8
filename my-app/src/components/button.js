"use client"
//Compontente FUNCIONAL
/*
export default function Button() {

    function funcion() {
        console.log("Hola mundo")
    }

    return(
        <button onClick={funcion}>Registrarme</button>
    )
}
*/

// PROPS

//children: siempre existe, el hijo de la etiwueta html
// Las demás uno les asigna el nombre
export default function Button(props) {

    return(
        <button onClick={props.onClick}>Registrarme</button>
    )
}