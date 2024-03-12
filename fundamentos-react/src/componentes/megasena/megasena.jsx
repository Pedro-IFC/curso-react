import React, { useState } from 'react';

var Megasena = props =>{
    const [digitos, setDigitos ] = useState(1);
    const [numeros, setNumeros ] = useState("");
    function quandoMudar(e){
        setDigitos(e.target.value);
    }
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    function contains(numerosV, al){
        for(let i = 0; i<numerosV.length; i++){
            if(numerosV[i] === al){
                return true;
            }
        }
        return false;
    }
    function ordenate(ordem){
        for(var i = 0; i<ordem.length; i++){
            for(var maior = 0; maior<ordem.length; maior++){
                if(ordem[maior] > ordem[maior+1]){
                    var maiorIn = ordem[maior];
                    ordem[maior] = ordem[maior+1];
                    ordem[maior+1] = maiorIn;
                }
            }
        }
        return ordem;
    }
    function gerarNumeros(){
        var numerosV = [];
        for(var i = 0; i<digitos; i++){
            var al = getRandomInt(1, 60);
            while(contains(numerosV, al)){
                al = getRandomInt(1, 60);
            }
            numerosV[i] = al;
        }
        numerosV = ordenate(numerosV);

        var numeros_Display = "";
        for(i = 0; i<digitos; i++){
            numeros_Display = numeros_Display + numerosV[i] + ((i+1===digitos)? "" : " - ");
        }
        setNumeros(numeros_Display);
    }
    return <>
        <h2>{numeros}</h2>
        <input type="number" value={digitos} onChange={quandoMudar} />
        <button onClick={gerarNumeros}>Gerar números</button>
    </>
}

export default Megasena;