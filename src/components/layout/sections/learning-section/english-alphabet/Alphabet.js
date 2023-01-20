import * as React from 'react';
import {Card} from "antd";
import {useState} from "react";

function Alphabet(){
    const [height, setHeight] = useState(200);
    const handleColor = () =>{
        setHeight(500)
    }
    return(
        <div>
            <Card
                style={{
                    width: 300,
                    height: height
                }}
                onClick={handleColor}
            >
                <div>
                    <text style={{fontSize: 30}}>A</text>
                    <text style={{fontSize: 30, textTransform: "lowercase"}}>A</text>
                </div>
                <button>Play Sound</button>
            </Card>
        </div>
    )
}

export default Alphabet;
