import React, { useState } from 'react';

function Input(props){
    const [valor, setValor ]= useState("Inicial");
    function quandoMudar(e){
        setValor(e.target.value);
    }
    return <>
        <div>
            <input type="text" value={valor} onChange={quandoMudar} />
            <input type="text" value={valor} readOnly />
            <input type="text" value={undefined} />

        </div>
    </>
}
export default Input;