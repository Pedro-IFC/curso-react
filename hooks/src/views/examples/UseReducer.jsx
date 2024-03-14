import React, { useReducer, useState } from 'react'
import PageTitle     from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';
import {initialState, reducer} from '../../store';
import { numberAdd2, numberAdd7, divBy25, arredondar, addAny, login } from '../../store/actions/';

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [username, setUserName] = useState("");
    const [num, setNum] = useState(0);
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                {state.user?
                    <span className="text">{state.user.name}</span>
                    : <span className="text red">Não está logado</span>
                }
                <br />
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={_=>numberAdd2(dispatch)}>+2</button>
                </div>
                <div>
                    <input type="text" placeholder='Nome' className="input" value={username} onChange={e=>setUserName(e.target.value)} />
                    <button className="btn" onClick={_=>login(dispatch,username)}>Login</button>
                </div>
            </div>
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <br />
                <span className='text'>{state.number}</span>
                <div>
                    <button className="btn" onClick={_=>numberAdd2(dispatch)}>+2</button>
                    <button className="btn" onClick={_=>numberAdd7(dispatch)}>+7</button>
                    <button className="btn" onClick={_=>divBy25(dispatch)}>%25</button>
                    <button className="btn" onClick={_=>arredondar(dispatch)}>arredondar</button>
                </div>
                <div>
                    <input type="number" placeholder='Número' value={num} className="input" onChange={e=>setNum(e.target.value)} />
                    <button className="btn" onClick={_=>addAny(dispatch, num)}>add x</button>
                </div>
            </div>
        </div>
        
    )
}

export default UseReducer
