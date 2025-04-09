//  Registration page for the Eternal Zen application

//  Importing dependencies
import React from 'react';
import { storeObject } from '../utils/stores.js';
//  Importing components
import Form from '../components/misc/form/form';

export default function Registration() 
{
    const { setObject } = storeObject();

    const formData = {
        inputs: [
            {
                value: '',
                type: 'text',
                required: true,
                name: 'username',
                cls: 'text-field',
                placeholder: 'E.G JDoe23',
                
            },
            {
                value: '',
                type: 'text',
                name: 'email',
                required: true,
                cls: 'text-field',
                placeholder: 'E.G som12@gmail.com',
            },
            {
                value: '',
                required: true,
                cls: 'pw-field',
                type: 'password',
                name : 'password',                
                placeholder: 'E.G 12345678',
            },
            {
                value: '',
                required: true,
                cls: 'pw-field',
                type: 'password',
                name: 'confirm-password',
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


