import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';
import { useCounter } from '../../hooks/hooksCounter';

const UseRef = (props) => {
    const [count, inc, dec] = useCounter(0);
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
        </div>
    )
}

export default UseRef
