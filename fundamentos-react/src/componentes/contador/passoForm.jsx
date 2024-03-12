import React from 'react';

var passoForm = (props)=>{
    return <>
        <label htmlFor="passoInicial"></label>
        <input id="passoInicial" type="number" value={props.passo} onChange={ props.alterarPassos } />
    </>
}

export default passoForm;