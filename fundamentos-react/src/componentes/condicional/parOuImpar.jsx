import React from 'react';

const ParImpar = props => {
    const num = parseFloat(props.numero);
    const isPar = num%2===0;
    return <>
            <div className="parOuImpar">
                { isPar?
                    <span>Par</span> :
                    <span>Impar</span>
                }
            </div>    
        </>;
}
export default ParImpar;