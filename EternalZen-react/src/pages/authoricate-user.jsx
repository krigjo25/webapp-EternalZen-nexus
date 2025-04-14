//  Registration page for the Eternal Zen application

//  Importing dependencies
import React, { useState } from 'react';

//  Importing components
import RegistrationFrom from '../components/form/form';
import Navigation from '../components/navigation/navigation';

export default function Registration() 
{

    //  Registering the user form
    const [formData, setFormData] = useState(
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
                        btn: [
                            {
                                type: 'button',
                                cls: 'google-login-btn',
                                name: 'Login with Google',
                                href: '/google-login',
                            },
                            {
                                type: 'button',
                                cls: 'facebook-login-btn',
                                name: 'Login with Facebook',
                                href: '/facebok-login',
                            },
                        ],
                    },
                },
                inputs: [
                    {
                        type: 'text',
                        required: true,
                        name: 'username',
                        placeholder: 'E.G Jhon',
                    },
                    {
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
        });
    

    const mapData =
    {
        0: () => loginForm(),
        1: () => registerUser(),
    };

    const handleData = (id) =>
        { 
            //  Ensure the vailidity of the id
            const data = mapData[id];

            if (data)
            {
                setFormData(data());
            }
            else
            {
                formData = () => loginForm();
                console.warn(`No functions mapped for this id`);
            }
            
        }

    const navigationData = 
        [
            {
                id: 0,
                cls: 'btn',
                name: 'Login',
                type: 'button',
                func:() => handleData(0),
            },
            {
                id: 1,
                cls: 'btn',
                type: 'button',
                name: 'Register',
                href: '/register',
                func: () => handleData(1),
            }
        ]
    return (
        <>
        <div className='credential-form'>
            <Navigation arg = { navigationData }/>
            <div className={formData.data.cls}>
                <RegistrationFrom formData={formData} />
            </div>
        </div>
        </>
    );
};

function loginForm()
{
    const data = {
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
                required: true,
                name: 'username',
                placeholder: 'E.G Jhon',
            },
            {
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
    }

    return data    
};

function registerUser()
{

    const data = {
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
    }
    return data
};
