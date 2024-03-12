import React from 'react';

const Filho = props => {
    return <>
            <div>
                <h2>Filho</h2><hr></hr>
                <button onClick={ _ =>props.quandoClicar("João", 23, true)}>
                    Fornecer dados
                </button>
            </div>
        </>
}
export default Filho;