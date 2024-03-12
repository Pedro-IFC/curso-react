import "./Content.css";
import React from "react";
import { Routes, Route } from "react-router-dom"; // Importe esses

import Home from "../../views/examples/Home";
import Param from "../../views/examples/Param";
import About from "../../views/examples/About";
import NotFound from "../../views/examples/NotFound";
 

const Content = props => {
    return <div className="Content">
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/param/:id" element={<Param />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
}

export default Content;