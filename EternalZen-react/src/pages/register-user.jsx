//  Registration page for the Eternal Zen application

//  Importing dependencies
import React from 'react';
import { storeObject } from '../utils/stores.js';
//  Importing components
import Form from '../components/misc/form/form';

export default function Registration() 
{
    const { setObject } = storeObject();

    const handleData = (object) =>
        { 
            const data = object;

            //  Ensure that there is some mapped data to set
            data ? setObject(data()) : console.warn(`No data to set`);
        }

    const formData = {
        inputs: [
            {
                type: 'text',
                value: '',
                required: true,
                cls: 'text-field',
                placeholder: 'E.G JDoe23',
                
            },
            {
                type: 'Email',
                value: '',
                required: true,
                cls: 'text-field',
                placeholder: 'E.G som12@gmail.com',
            },
            {
                type: 'password',
                value: '',
                required: true,
                cls: 'pw-field',
                placeholder: 'E.G 12345678',
            },
            {
                type: 'password',
                value: '',
                required: true,
                cls: 'pw-field',
                placeholder: 'E.G 12345678',
            },
 
        ],
        btn:
        [
            {
                type: 'submit',
                cls: 'submit-btn',
                name: 'Register',
            },
            {
                type: 'reset',
                cls: 'reset-btn',
                name: 'Reset Form',
            },

    ]
    };

    //  Set the data to the store
    //  handleData(() => formData);

    return (
        <>
        <Form data={formData} />
        </>
    )
}


