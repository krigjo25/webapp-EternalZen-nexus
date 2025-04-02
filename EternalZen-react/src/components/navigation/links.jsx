//  Import dependencies
import React from "react";

export default function Link({ obj })
{
    return (
        <>
        {obj.external && 
            <a className="external" href={obj.link}>
                {obj.name}
            </a>
        }
        {!obj.external && 
        <a href={obj.link}>
            {obj.name}
            </a>
        }
        </>
    );
}