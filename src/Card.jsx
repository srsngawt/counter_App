import React, { useState } from "react";

function Card(){
    const [count,setCount]=useState(0);

    const increment = function(){
        setCount(count+1);
    }
    return(
        <div className="container">
            <div className="box">
                <div className="count">
                    {count}
                </div>
                <button onClick={increment}>+</button>
            </div>
        </div>
    );
}
export default Card;