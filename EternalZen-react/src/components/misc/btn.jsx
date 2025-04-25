//  Import dependencies
import React from "react";

export default function Button({btn})
{
    return (
        <button
            type={btn.type}
            onClick={btn.func}
            className = {btn.cls} 
            
                >
                {btn.name}
        </button>);
}