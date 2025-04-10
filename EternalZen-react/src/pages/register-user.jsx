//  Registration page for the Eternal Zen application

//  Importing dependencies
import React from 'react';
//  Importing components
import Form from '../components/misc/form/form';

export default function Registration() 
{

    //  Registering the user form
    const formData = {
        inputs: [
            {
                value: '',
                type: 'text',
                required: true,
                name: 'username',
                cls: 'credential-field',
                placeholder: 'E.G JDoe23',
                
            },
            {
                value: '',
                type: 'text',
                name: 'email',
                required: true,
                cls: 'credential-field',
                placeholder: 'E.G som12@gmail.com',
            },
            {
                value: '',
                required: true,
                cls: 'credential-field',
                type: 'password',
                name : 'password',                
                placeholder: 'E.G 12345678',
            },
            {
                value: '',
                required: true,
                cls: 'credential-field',
                type: 'password',
                name: 'confirm-password',
                placeholder: 'E.G 12345678',
            },
            {
                value: false,
                type: 'checkbox',
                required: true,
                cls: 'control-field',
                name: 'Agrees to the Terms Of Agreement',
            },
            {
                value: false,
                type: 'checkbox',
                required: true,
                cls: 'control-field',
                name: 'Read Privacy Policy',
            }
 
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

        ],

        id : 0,
        method: 'post',
        action:'registerData.html',
        cls: "flex-column-justify-space-between bs-32",
        
        
    };

    return (
        <>
        <Form data={formData} />
        </>
    );
}


