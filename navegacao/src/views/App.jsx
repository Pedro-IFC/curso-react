import "./App.css";
import "../index.css";
import React from "react";
import { BrowserRouter } from  'react-router-dom' // essa importação 
import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";

const App = props => {
    return <div className="App">
        <BrowserRouter>
            <Menu/>
            <Content/>
        </BrowserRouter>        
    </div>
}

export default App;