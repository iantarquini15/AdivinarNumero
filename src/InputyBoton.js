import React from "react";
function InputyBoton(props) {
    let [valorUsuario, setValorUsuario] = React.useState(0);
    let [valorMaquina, setValorMaquina] = React.useState(Math.round((Math.random() * props.limite) + 1));
   function actualizarValor(evento) {
       setValorUsuario(evento.target.value);
    }
    function comparaNumeros() {
        if (valorUsuario == valorMaquina) {
            alert('Adivinaste el numero que estaba pensando');
        } else {
            alert(`el numero en el que estaba pensado era ${valorMaquina}`);
        }
        setValorMaquina(Math.round((Math.random() * props.limite) + 1));
        
    }    return (
        <div>
            <p>Adivina el numero que estoy pensando</p>
            <input onChange={actualizarValor} type="number" id="itemUsuario" min={1} max={10}></input>
            <br/>
            <button onClick={comparaNumeros}>Adivinar!</button>
        </div>
    )
}
export default InputyBoton;