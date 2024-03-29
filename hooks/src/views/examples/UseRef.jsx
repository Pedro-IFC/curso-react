import React, { useState, useRef, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function merge(val1, val2){
    var valf = "";
    for(var i=0; i<val1.length; i++){
        valf+=val1[i];
        if(val2[i]){
            valf+=val2[i];
        }
    }
    return valf;
}

const UseRef = (props) => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");

    const count = useRef(0);
    const myInput1 = useRef(null);
    const myInput2 = useRef(null);

    useEffect(function(){
        count.current++;
    }, [value1, value2]);

    useEffect(function(){
        myInput2.current.focus()
    }, [value1]);

    useEffect(function(){
        myInput1.current.focus()
    }, [value2]);

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input ref={myInput1} type="text" className="input" id="" value={value1} onChange={e=>setValue1(e.target.value)} />
            </div>
            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <input ref={myInput2} type="text" className="input" id="" value={value2} onChange={e=>setValue2(e.target.value)} />
            </div>
        </div>
    )
}

export default UseRef
