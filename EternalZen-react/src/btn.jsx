//  Import dependencies
import React from "react";

export default function Button({btn})
{
    btn = btn.data;
    

    return (
        <button>{btn.name}</button>);
}