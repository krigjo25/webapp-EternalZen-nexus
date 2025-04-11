//  Import dependencies
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


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
            
                <Link href={obj.link}>
                    <div className ='link-btn'>
                        {obj.name}
                    </div>
                </Link>
        }
        </>
    );
}

// Define prop types for the component