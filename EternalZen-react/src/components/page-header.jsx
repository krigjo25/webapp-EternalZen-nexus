//  EternalZen header content

//  Importing dependencies
import { useState } from 'react';
import { storeObject } from '../utils/stores.js';
import { Link, useNavigate } from 'react-router-dom';

//  Importing components
import Image from './misc/image.jsx';
import Navigation from './navigation/navigation.jsx';
import RegistrationFrom from '../pages/authoricate-user.jsx';


function Header()
{
    //  Importing Hooks
    const navigate = useNavigate();
    const { setObject } = storeObject()
    
    //  Initalizing buttons, links & images
    const auth = [
        {
            id : 5,
            type: 'button',
            name: 'Sign-in/up',
            func: () => authorizationForm(),
        },

    ];

    //  Map the functions
    const mapData = {
        
        0: () => aboutUs(),
        1: () => spirituality(),
        2: () => meditation(),
        3: () => affirmation(),
    };

    const handleData = (id) =>
        { 
            //  Ensure the vailidity of the id
            const data = mapData[id];
            console.log(data);
            if (data)
            {
                //  Ensure that there is some mapped data to set
                setObject(data());
                navigate(data.link);
            }
            else
            {
                console.warn(`No functions mapped for this id : ${id}`);
            }
            
        }

    const headerNavigation =[
        {
            id : 0,
            type: "button",
            func : () => handleData(0),
            name : "About us & our philiosophy",
        },
        {
            id : 1,
            type: "button",
            func : () => handleData(1),
            name: "What is Spirituality",
        },
        {
            id : 2,
            type: "button",
            func : () => handleData(2),
            name: "What is Meditation",
        },
        {
            id : 3,
            type: "button",
            func : () => handleData(3),
            name: "What is Affirmations",
        },
        {
            id : 4,
            type: "link",
            external : false,
            link: '/calibrations',
            name: 'David R. Hawkings\'s Calibrations of consiousness',
        },
    ];

    const logo = 
    {
        src:'EternalZenLogo.svg',
        alt:'EternalZenLogo.svg',
    }

    return (
        <>
            <div className='flex-wrap-row-justify-space-evenly flex-wrap-row-align-items-center logo'> 
                <Link to='/'>
                    <Image src = {logo.src} alt = {logo.alt} />
                </Link>
                <Link to='/'>
                    <h1>EternalZen - Logo</h1>
                </Link>
                <Navigation arg = {auth} cls = {'flex-wrap-row-justify-space-evenly header-nav'}/>
            </div>
            <Navigation arg = {headerNavigation} cls = {"flex-wrap-row-justify-center"}/>
        </>
    )

}

function aboutUs()

{
    
    const data = {
        link : '/',
        headline: "EternalZen & our philiosophy",
        cls: "justify-text-size margin-inline-11",

        paragraphs:
        [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis porta dolor,
            ut scelerisque ex accumsan sed. Suspendisse id mauris a ex volutpat porttitor vel aliquet lacus.
            Quisque vestibulum rutrum placerat. Mauris interdum turpis lacus, et interdum tortor imperdiet a.
            Pellentesque rutrum leo bibendum sodales commodo. Morbi magna mi, sollicitudin sed consectetur at,
            molestie sit amet nisi. Nullam nisl velit, finibus in lectus a, dapibus porttitor leo.
            Sed at sapien nec magna placerat facilisis. Donec posuere dictum semper. Ut non dui eget diam sollicitudin iaculis.
            Duis libero massa, gravida vel rhoncus sit amet, gravida in enim. Donec orci nibh, pulvinar sit amet quam vel,
            lacinia mattis purus. In tempus, est eget feugiat malesuada, mauris ante efficitur dolor,
            sit amet viverra neque lacus at orci. Etiam lacinia massa a est tincidunt egestas. `,

            `Mauris sit amet arcu tincidunt libero ornare vestibulum. Duis convallis nunc vel nulla ultrices,
            id pretium ligula rhoncus. Maecenas a diam sem. Morbi ullamcorper feugiat pharetra. Duis gravida
            ante accumsan pulvinar faucibus. Donec eu nulla eu nulla accumsan sagittis. Maecenas ac eros non
            elit tempor maximus. Nulla mollis, odio sed consequat tempus, mi dui tincidunt felis, at cursus
            mauris massa sed augue. Aenean vulputate iaculis ligula ut luctus. Mauris id molestie sem.`,
            
            `Sed mattis facilisis pulvinar. Integer aliquam lacus id convallis lobortis. Vivamus vestibulum
            scelerisque metus, quis semper nisl placerat vitae. Nullam sodales eros a quam tincidunt tempus.
            Sed eleifend, velit sit amet aliquet mattis, nulla tellus fringilla mi, a sagittis augue diam nec
            lorem. Morbi malesuada sit amet arcu eget vehicula. Sed vel dictum arcu, ac suscipit nisl. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi vel sapien in
            mauris viverra auctor. Morbi vitae pharetra ipsum. Nulla ut consequat leo, nec finibus nisi.
            Curabitur viverra ultrices mattis. Maecenas vitae eros odio. Ut efficitur rutrum luctus. Maecenas
            tristique quam quis est tempor, quis suscipit ex sollicitudin.`,

            ` Cras faucibus dui eget auctor finibus. Nullam lobortis, enim eget efficitur molestie,
            nunc mi vestibulum lectus, non lobortis leo magna ut magna. Fusce interdum massa sed
            placerat egestas. Praesent scelerisque facilisis odio, et mollis quam luctus quis.
            Mauris at aliquam enim, non lobortis risus. Aenean suscipit quam at quam facilisis
            elementum. Nam sed condimentum metus. Cras semper eget neque eu sollicitudin.`,
            

            `Etiam sed dui posuere, eleifend tellus non, consequat est. Maecenas feugiat
            felis at ligula aliquam, vitae posuere lorem vulputate. Cras iaculis viverra
            pulvinar. Vestibulum facilisis dui sed libero lacinia tincidunt. In pulvinar,
            lorem sagittis vestibulum iaculis, diam nulla iaculis lectus, nec condimentum
            quam elit porttitor metus. Donec fermentum nibh vel quam viverra, at ultrices
            justo placerat. Aliquam eget gravida dui. Nunc maximus faucibus arcu vitae luctus.
            Morbi lobortis, magna dapibus iaculis consectetur, leo felis volutpat leo, nec
            feugiat libero elit sed sapien. Nam vitae congue orci. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Duis erat arcu, scelerisque eu egestas
            non, maximus a lectus. Nam eu odio nibh. Pellentesque velit erat, vestibulum
            vel libero a, tincidunt posuere neque. Proin sodales a nulla quis vehicula.`,
        ],
    }
    return data;
}

function spirituality()
{
    const data =
    { 
        link : '/',
        headline: "What is Spirituality?",
        cls: "justify-text-size margin-inline-11",
        
        paragraphs:
        [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis porta dolor,
            ut scelerisque ex accumsan sed. Suspendisse id mauris a ex volutpat porttitor vel aliquet lacus.
            Quisque vestibulum rutrum placerat. Mauris interdum turpis lacus, et interdum tortor imperdiet a.
            Pellentesque rutrum leo bibendum sodales commodo. Morbi magna mi, sollicitudin sed consectetur at,
            molestie sit amet nisi. Nullam nisl velit, finibus in lectus a, dapibus porttitor leo.
            Sed at sapien nec magna placerat facilisis. Donec posuere dictum semper. Ut non dui eget diam sollicitudin iaculis.
            Duis libero massa, gravida vel rhoncus sit amet, gravida in enim. Donec orci nibh, pulvinar sit amet quam vel,
            lacinia mattis purus. In tempus, est eget feugiat malesuada, mauris ante efficitur dolor,
            sit amet viverra neque lacus at orci. Etiam lacinia massa a est tincidunt egestas.`,

            `Mauris sit amet arcu tincidunt libero ornare vestibulum. Duis convallis nunc vel nulla ultrices,
            id pretium ligula rhoncus. Maecenas a diam sem. Morbi ullamcorper feugiat pharetra. Duis gravida
            ante accumsan pulvinar faucibus. Donec eu nulla eu nulla accumsan sagittis. Maecenas ac eros non
            elit tempor maximus. Nulla mollis, odio sed consequat tempus, mi dui tincidunt felis, at cursus
            mauris massa sed augue. Aenean vulputate iaculis ligula ut luctus. Mauris id molestie sem.`
        ]
}
    return data;
}

function meditation()
{

    const data =
    {
        link : '/',
        headline: "What is Meditation?",
        cls: "justify-text-size margin-inline-11",

        paragraphs: 
        [
            `Sed mattis facilisis pulvinar. Integer aliquam lacus id convallis lobortis. Vivamus vestibulum
            scelerisque metus, quis semper nisl placerat vitae. Nullam sodales eros a quam tincidunt tempus.
            Sed eleifend, velit sit amet aliquet mattis, nulla tellus fringilla mi, a sagittis augue diam nec
            lorem. Morbi malesuada sit amet arcu eget vehicula. Sed vel dictum arcu, ac suscipit nisl. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi vel sapien in
            mauris viverra auctor. Morbi vitae pharetra ipsum. Nulla ut consequat leo, nec finibus nisi.
            Curabitur viverra ultrices mattis. Maecenas vitae eros odio. Ut efficitur rutrum luctus. Maecenas
            tristique quam quis est tempor, quis suscipit ex sollicitudin.`,

            `Cras faucibus dui eget auctor finibus. Nullam lobortis, enim eget efficitur molestie,
            nunc mi vestibulum lectus, non lobortis leo magna ut magna. Fusce interdum massa sed
            placerat egestas. Praesent scelerisque facilisis odio, et mollis quam luctus quis.
            Mauris at aliquam enim, non lobortis risus. Aenean suscipit quam at quam facilisis
            elementum. Nam sed condimentum metus. Cras semper eget neque eu sollicitudin.`
        ],
    }
    return data;
}

function affirmation()
{

    const data = 
    {
        link : '/',
        headline: "What is Affirmation?",
        cls: "justify-text-size margin-inline-11",

        paragraphs:
        [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis porta dolor,
        ut scelerisque ex accumsan sed. Suspendisse id mauris a ex volutpat porttitor vel aliquet lacus.
        Quisque vestibulum rutrum placerat. Mauris interdum turpis lacus, et interdum tortor imperdiet a.
        Pellentesque rutrum leo bibendum sodales commodo. Morbi magna mi, sollicitudin sed consectetur at,
        molestie sit amet nisi. Nullam nisl velit, finibus in lectus a, dapibus porttitor leo.
        Sed at sapien nec magna placerat facilisis. Donec posuere dictum semper. Ut non dui eget diam sollicitudin iaculis.
        Duis libero massa, gravida vel rhoncus sit amet, gravida in enim. Donec orci nibh, pulvinar sit amet quam vel,
        lacinia mattis purus. In tempus, est eget feugiat malesuada, mauris ante efficitur dolor,
        sit amet viverra neque lacus at orci. Etiam lacinia massa a est tincidunt egestas.`
    ]
    }
    return data;
}

function authorizationForm()
{
    const data = {
        userAuthoricate : true
    }
    
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const article = document.querySelector('article');
    const modal = document.querySelector('#model-box');

    modal.classList.toggle('open');
    footer.classList.toggle('blur');
    header.classList.toggle('blur');
    article.classList.toggle('blur');
    


    return data
}

//  Exporting the component
export default Header