//  Import dependencies
import React from "react";

export default function Link({ obj })
{
    return (
        <>
        {obj.external && 
            
                <a href={obj.link} target="_blank" rel="noopener noreferrer">
                    <div className="external-link-btn">
                        {obj.name}
                    </div>
                </a>
        }
        {!obj.external &&
            
                <a href={obj.link}>
                    <div class ='link-btn'>
                        {obj.name}
                    </div>
                </a>
        }
        </>
    );
}