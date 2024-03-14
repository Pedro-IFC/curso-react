import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import {DataContext} from '../../data/DataContext';
import SectionTitle from '../../components/layout/SectionTitle'
import { AppContext } from '../../data/Store';
const UseContext = (props) => {
    const context = useContext(DataContext);
    const {number, setNumber, text} = useContext(AppContext);
    function setN(N){
        context.setState({
            ...context.state,
            number: N
        })
    }
    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="UseContext Ex #01"/>
            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text red">{context.state.number}</span>
                <input type="number" className="input" value={context.state.number} onChange={e=>setN(e.target.value)}/>
            </div>
            <SectionTitle title="UseContext Ex #02"/>
            <div className="center">
                <span className="text red">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button onClick={_=>setNumber(parseInt(number)+1)} >
                        +1
                    </button>
                    <button onClick={_=>setNumber(parseInt(number)-1)} >
                        -1
                    </button>
                </div>
            </div>
        </div>

    )
}

export default UseContext
