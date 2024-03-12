import React from 'react';
const FamiliaMembro = props => {
    return <>
            <span><strong>{props.nome||"Nome"}</strong> {props.sobrenome}</span><br></br>
        </>;
}
export default FamiliaMembro;