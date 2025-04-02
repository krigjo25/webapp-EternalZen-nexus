//  Image hooks
//  Importing dependencies
import React from 'react';

export default function Image(img, size= null)
{
    return (
        <>
            <img src={img.src} alt={img.alt} />
        </>
    )
}