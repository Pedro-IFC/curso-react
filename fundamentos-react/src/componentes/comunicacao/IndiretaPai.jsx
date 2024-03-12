import React, { useState } from 'react';
import IndiretoFilho from './IndiretaFilho.jsx';

const Pai = props => {
    const [nome, setNome]  = useState("?");
    const [idade, setIdade]  = useState(0);
    const [nerd, setNerd]  = useState(false);
    function fornecerDados(nomeParam, idadeeParam, nerdeParam){
        setNome(nomeParam);
        setIdade(idadeeParam);
        setNerd(nerdeParam);
    }
    return <>
            <h2>Pai</h2><hr></hr>
            <span>{nome}</span><br></br>
            <span>{idade}</span><br></br>
            <span>{nerd ? "Verdadeiro" : "Falso"}</span><br></br>
            <IndiretoFilho quandoClicar={fornecerDados}></IndiretoFilho>
        </>
}
export default Pai;