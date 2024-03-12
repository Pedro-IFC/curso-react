import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';
import { useState } from 'react'
import { useEffect } from 'react';

function getFatorial(num){
    num = parseInt(num);
    return num<0? -1 : (num===0 ? 1 : (getFatorial(num-1)*num));
}
const UseEffect = (props) => {
    const [num, setNum] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [parImpar, setParImpar] = useState("Impar");
    useEffect(function(){
        setFatorial(getFatorial(num));
        setParImpar(num%2===0?"Par":"Impar");
    }, [num]);
    

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial<0?"Não existe":fatorial}</span>
                </div>
                <input type="number" name="num" id="num" value={num} onChange={(e)=>setNum(e.target.value)}/>
            </div>
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">É par ou impar: </span>
                    <span className="text red">{parImpar}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
