import React from 'react';
import alunos from '../../data/alunos.js';

const AlunosLista = props => {
    let lis = alunos.map((aluno,i)=>{
        return (<li key={aluno.id}>{aluno.id} - {aluno.nome} : {aluno.nota}</li>
        );
    });
    return <>
        <ul>
            { lis }
        </ul>
    </>;
}

export default AlunosLista;