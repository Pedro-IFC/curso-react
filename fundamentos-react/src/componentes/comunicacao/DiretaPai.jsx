import React from 'react';
import DiretoFilho from './DiretaFilho.jsx';

const Pai = props => {
    return <>
            <DiretoFilho nome="Teste 1" numero={23} bool={true}></DiretoFilho>
            <DiretoFilho nome="Teste 2" numero={2} bool={true}></DiretoFilho>
        </>
}
export default Pai;