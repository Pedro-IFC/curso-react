import React from 'react';

let botoes = props => {
    return <>
        <button onClick={ props.incrementar }>INC</button>
        <button onClick={ props.decrementar }>DEC</button>
    </>
};
export default botoes;