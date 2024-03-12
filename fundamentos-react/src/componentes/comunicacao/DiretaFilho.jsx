import React from 'react';

const Filho = props => {
    return <>
            <div>
                <div>{props.texto}</div><br></br>
                <div>{props.numero}</div><br></br>
                <div>{props.bool}</div><br></br>
            </div>
        </>
}
export default Filho;