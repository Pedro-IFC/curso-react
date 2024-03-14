import React, { useReducer, useState } from 'react'
import PageTitle     from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const initialStare = {
    cart:[],
    products: [],
    user: null,
    number: 0
}
function reducer(state, action){
    switch(action.type){
        case "add2":
            return {...state, number: state.number+2}
        break;
        case "login":
            return {...state, user: {...state.user, name: action.name}}
        break;
        case "add7":
            return {...state, number: state.number+7}
        break;
        case "div25":
            return {...state, number: state.number/25}
        break;
        case "addany":
            return {...state, number: state.number+parseInt(action.num)}
        break;
        case "arredondar":
            return {...state, number: parseInt(state.number)}
        break;
        default:
            return state
    }
}
const UseReducer = (props) => {
    const [state, exec] = useReducer(reducer, initialStare)
    const [username, setUserName] = useState("");
    const [num, setNum] = useState("");
    /*useEffect(function(){
        exec({type: "login", name:username});
    }, [username])*/
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
                    : <span className="text">Não está logado</span>
                }
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={e=>exec({type:"add2"})}>+2</button>
                </div>
                <div>
                    <button className="btn" onClick={e=>exec({type:"login", name:username})}>Login</button>
                </div>
                <input type="text" className="input" value={username} onChange={e=>setUserName(e.target.value)} />
            </div>
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <span>{state.number}</span>
                <div>
                    <button className="btn" onClick={e=>exec({type:"add2"})}>+2</button>
                </div>
                <div>
                    <button className="btn" onClick={e=>exec({type:"add7"})}>+7</button>
                </div>
                <div>
                    <button className="btn" onClick={e=>exec({type:"div25"})}>%25</button>
                </div>
                <div>
                    <button className="btn" onClick={e=>exec({type:"arredondar"})}>arredondar</button>
                </div>
                <div>
                    <button className="btn" onClick={e=>exec({type:"addany", num:num})}>add x</button>
                    <input type="text" value={num} className="input" onChange={e=>setNum(e.target.value)} />
                </div>
            </div>
        </div>
        
    )
}

export default UseReducer
