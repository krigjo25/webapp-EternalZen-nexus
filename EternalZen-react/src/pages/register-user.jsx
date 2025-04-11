//  Registration page for the Eternal Zen application

//  Importing dependencies
import React from 'react';
//  Importing components
import Form from '../components/misc/form/form';

export default function Registration() 
{

    //  Registering the user form
    const formData = {
        field :
        {
            cls: 'field-control',
            legend: 
            {
                cls: 'user-credential',
                title: 'Register an account',
                
            },
        },
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
                type: 'password',
                name : 'password',                
                cls: 'credential-field',
                placeholder: 'E.G 12345678',
            },
            {
                value: '',
                required: true,
                type: 'password',
                cls: 'credential-field',
                name: 'confirm-password',
                placeholder: 'E.G 12345678',
            },
            {
                value: false,
                required: true,
                type: 'checkbox',
                cls: 'control-field',
                href: '/termsofagreement',
                name: 'Terms Of Agreement',
                
            },
            {
                value: false,
                required: true,
                type: 'checkbox',
                cls: 'control-field',
                href: '/privacypolicy',
                name: 'Our Privacy Policy',
                
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
        action:'/tansfer-data.html',
        tile: 'Register an account',
        cls: "flex-column-justify-space-between is-47",
        
        
    };

    return (
        <>
        <Form data={formData} />
        </>
    );
}


