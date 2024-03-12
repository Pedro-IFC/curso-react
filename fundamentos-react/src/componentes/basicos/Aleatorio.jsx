const aleatorio = props => {
    var tag;
    let min = parseInt(props.min);
    let max = parseInt(props.max);
    if(max < min){
        tag =  
            <>
                <h2>Máximo e minimo invalido</h2>
            </>;
    }else{
        tag = 
            <>
                <h2>Aleatório: { Math.random()*(max-min)+min }</h2>
            </>;
    }
    return tag;
}
export default aleatorio;