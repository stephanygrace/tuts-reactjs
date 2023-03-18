import React from "react";

function FunctionClick() {

    function clickHandler ()  {
        console.log("clicked")
    }

    return (
        <div>
            {/* Event handlick onClick is a function, not a function call; Do not add parenthesis */}
            <button onClick={clickHandler} > Click </button>
        </div>
    )
}
    
export default FunctionClick