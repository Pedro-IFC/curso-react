import React, {Component} from "react";

import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./passoForm";

class Contador extends Component{
    state = {
        numero: parseInt(this.props.numeroInicial) || 0,
        passo:  parseInt(this.props.passoInicial) || 1
    }
    inc = ()=>{
        this.setState({
            numero: this.state.numero + this.state.passo
        });
    }
    dec = ()=>{
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    }
    alterarPasso = (e)=>{
        this.setState({
            passo: parseInt(e.target.value)
        });
    }
    render(){
        return <>
            <div>
                <h2>Contador</h2>
                <Display numero={ this.state.numero }></Display>
                <PassoForm passo={this.state.passo} alterarPassos={this.alterarPasso}></PassoForm>
                <div>
                    <Botoes incrementar={ this.inc } decrementar={ this.dec }></Botoes>
                </div>
            </div>
        </>
    }
}
export default Contador;