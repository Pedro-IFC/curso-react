import React from "react";
import { useParams } from "react-router-dom";
 
const Content = props => {
    const {id} = useParams();
    return <div className="Content">
        <div>
            <h1>Param</h1>
            <h2>Valor: {id}</h2>
        </div>
    </div>
}

export default Content;