import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';
import { useCounter } from '../../hooks/hooksCounter';
import { useFetch } from '../../hooks/useFetch';

const UseRef = (props) => {
    const [count, inc, dec] = useCounter(0);
    let url = 'http://files.cod3r.com.br/curso-react/estados.json';
    const response = useFetch(url);
    function showStates(states){
        return states.map(state => <li key={state.nome}>{state.nome} - {state.sigla}</li>)
    }
    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{count}</span>
                <button className='btn' onClick={_=>inc()}>
                    +1
                </button>
                <button className='btn' onClick={_=>dec()}>
                    -1
                </button>
            </div>
            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <ul>
                    {!response.loading ? showStates(response.data) : "Carregando"}
                </ul>
            </div>
        </div>
    )
}

export default UseRef
