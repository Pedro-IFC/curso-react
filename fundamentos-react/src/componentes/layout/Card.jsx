import "./Card.css"
const Card = props => {
    let titulo = props.titulo;
    const estilo = {
        backgroundColor: props.color||'red',
    }
    return <>
            <div className="Card" style={estilo}>
                <h2 className="Title">{titulo}</h2>
                <div className="Content">{props.children}</div>
            </div>    
        </>;
}
export default Card;