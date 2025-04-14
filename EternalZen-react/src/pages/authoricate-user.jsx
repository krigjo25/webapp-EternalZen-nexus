//  Registration page for the Eternal Zen application

//  Importing dependencies
import React from 'react';
//  Importing components
import RegistrationFrom from '../components/form/form';

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
        data :
        {
            id : 0,
            method: 'post',
            action:'/tansfer-data.html',
            tile: 'Register an account',
            cls: "flex-column-justify-space-between",

            field :
            {
                cls: 'field-control',
                text: `<b>*</b> Required Fields`,
                legend: 
                {
                    cls: 'user-credential',
                    title: 'Register an account',
                    
                },
            },
        },
    };
    const loginData = 
        {
            data: {
                id: 1,
                cls: 'flex-wrap-column-justify-space-evenly',
                action: '/user-login',
                method: 'POST',
                field: {
                    cls: 'flex-wrap-column-justify-center',
                    legend: {
                        title: 'Login',
                        cls: 'flex-wrap-row-justify-center',
                    },
                },
            },
            inputs: [
                {
                    type: 'text',
                    hidden: true,
                    required: true,
                    name: 'username',
                    placeholder: 'E.G Jhon',
                },
                {
                    hidden: true,
                    required: true,
                    type: 'password',
                    name: 'password',
                    placeholder: '123456789',
                },
            ],
            btn:
            [
                {
                    type: 'submit',
                    cls: 'submit-btn',
                    name: 'Login',
                },
                {
                    type: 'reset',
                    cls: 'reset-btn',
                    name: 'Reset Form',
                },
            ],
        };

    return (
        <>
        <RegistrationFrom formData={formData} />
        <RegistrationFrom formData={loginData} />
        </>
    );
}


