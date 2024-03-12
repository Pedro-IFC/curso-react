import "./Menu.css";
import React from "react";
import { Link } from  'react-router-dom' // essa importação 

const Menu = props => {
    return <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
                <li>
                    <Link to="/param/1">Param - 1</Link>
                </li>
                <li>
                    <Link to="/param/2">Param - 2</Link>
                </li>
                <li>
                    <Link to="/notfound">NotFound</Link>
                </li>
            </ul>
        </nav>
    </aside>
}

export default Menu;