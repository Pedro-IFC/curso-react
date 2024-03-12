import React from 'react';
import IF, {ELSE} from './if.js';

const UsuarioInfo = props => {
    const usuario = props.usuario||{};
    return <>
            <IF test={usuario.nome && usuario}>
                <span>Seja bem vindo <strong>{usuario.nome}</strong></span><br></br>
                <ELSE>
                    <span>Seja bem vindo <strong>amigão</strong></span>
                </ELSE>
            </IF>
        </>
}
export default UsuarioInfo;