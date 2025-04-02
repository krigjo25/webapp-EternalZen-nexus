//  Import dependencies
import React from "react";

export default function Link({link})
{
    return (
        <>
        {link.external && <a className="external" href={link.link}>{link.name}</a>}
        {!link.external && <a href={link.link}>{link.name}</a>}
        </>
    );
}