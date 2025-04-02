//  Import dependencies
import React from "react";

export default function Button({btn})
{
    return (
        <button onClick={btn.func}>{btn.name}</button>);
}