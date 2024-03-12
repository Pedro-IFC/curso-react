import React from 'react';
import produtos from '../../data/produtos.js';

const Prods = props => {
    let estilo = {
        border: '1px solid rgba(0, 0, 0)'
    }

    let table = produtos.map((produto,i)=>{
        return (
            <tr key={produto.id}>
                <td style={estilo}>{produto.id}</td>
                <td style={estilo}>{produto.nome}</td>
                <td style={estilo}>{produto.preco}</td>
            </tr>
        );
    });
    
    return <>
        <table style={estilo}>
            <thead>
                <tr>
                    <th style={estilo}>Código</th>
                    <th style={estilo}>Nome</th>
                    <th style={estilo}>Preço</th>
                </tr>
            </thead>
            <tbody>
                { table }
            </tbody>
        </table>
    </>;
}
export default Prods;