import * as React from 'react';
import Sidebar from "./sidebar/Sidebar";
import "./Layout.css"
import {useState} from "react";
import Alphabet from "./sections/learning-section/english-alphabet/Alphabet";
function Layout() {
    const [count, setCount] = useState(0);

    return(
        <div style={{display: "flex",justifyContent: "center"}}>
            <div className="layout-container">
                <Sidebar/>
                <Alphabet/>
            </div>
        </div>
    )
}

export default Layout;
