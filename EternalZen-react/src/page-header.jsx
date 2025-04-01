//  EternalZen header
//  Importing dependencies
import { useState } from 'react'


//  Importing Logo
import EternalZenLogo from '/vite.svg'


//  Importing components
import Main from './page-main'
import Navigation from './navigation.jsx'

function header()
{
    const buttons =[
            {
                name: "About us & our philiosophy",
                function:aboutUs

            },
            {
                name: "What is Spirituality",
                function: spirituality

            },
        ]
    return (
    <>
            <h1>EternalZen - Logo</h1>
            <Navigation data={buttons}/>

    </>
    )
}

function aboutUs()

{
    //  Initializing a data structure
    const data = 
    {
        headline: "About EternalZen & our philiosophy",

        p1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis porta dolor,
            ut scelerisque ex accumsan sed. Suspendisse id mauris a ex volutpat porttitor vel aliquet lacus.
            Quisque vestibulum rutrum placerat. Mauris interdum turpis lacus, et interdum tortor imperdiet a.
            Pellentesque rutrum leo bibendum sodales commodo. Morbi magna mi, sollicitudin sed consectetur at,
            molestie sit amet nisi. Nullam nisl velit, finibus in lectus a, dapibus porttitor leo.
            Sed at sapien nec magna placerat facilisis. Donec posuere dictum semper. Ut non dui eget diam sollicitudin iaculis.
            Duis libero massa, gravida vel rhoncus sit amet, gravida in enim. Donec orci nibh, pulvinar sit amet quam vel,
            lacinia mattis purus. In tempus, est eget feugiat malesuada, mauris ante efficitur dolor,
            sit amet viverra neque lacus at orci. Etiam lacinia massa a est tincidunt egestas. `,

        p2: ` Mauris sit amet arcu tincidunt libero ornare vestibulum. Duis convallis nunc vel nulla ultrices,
            id pretium ligula rhoncus. Maecenas a diam sem. Morbi ullamcorper feugiat pharetra. Duis gravida
            ante accumsan pulvinar faucibus. Donec eu nulla eu nulla accumsan sagittis. Maecenas ac eros non
            elit tempor maximus. Nulla mollis, odio sed consequat tempus, mi dui tincidunt felis, at cursus
            mauris massa sed augue. Aenean vulputate iaculis ligula ut luctus. Mauris id molestie sem.`,
            
        p3: `Sed mattis facilisis pulvinar. Integer aliquam lacus id convallis lobortis. Vivamus vestibulum
            scelerisque metus, quis semper nisl placerat vitae. Nullam sodales eros a quam tincidunt tempus.
            Sed eleifend, velit sit amet aliquet mattis, nulla tellus fringilla mi, a sagittis augue diam nec
            lorem. Morbi malesuada sit amet arcu eget vehicula. Sed vel dictum arcu, ac suscipit nisl. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi vel sapien in
            mauris viverra auctor. Morbi vitae pharetra ipsum. Nulla ut consequat leo, nec finibus nisi.
            Curabitur viverra ultrices mattis. Maecenas vitae eros odio. Ut efficitur rutrum luctus. Maecenas
            tristique quam quis est tempor, quis suscipit ex sollicitudin.`,

        p4:` Cras faucibus dui eget auctor finibus. Nullam lobortis, enim eget efficitur molestie,
            nunc mi vestibulum lectus, non lobortis leo magna ut magna. Fusce interdum massa sed
            placerat egestas. Praesent scelerisque facilisis odio, et mollis quam luctus quis.
            Mauris at aliquam enim, non lobortis risus. Aenean suscipit quam at quam facilisis
            elementum. Nam sed condimentum metus. Cras semper eget neque eu sollicitudin.`,
            

        p5:`Etiam sed dui posuere, eleifend tellus non, consequat est. Maecenas feugiat
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
    }

    return ;
}

function spirituality()
{

    let message = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis porta dolor,
    ut scelerisque ex accumsan sed. Suspendisse id mauris a ex volutpat porttitor vel aliquet lacus.
    Quisque vestibulum rutrum placerat. Mauris interdum turpis lacus, et interdum tortor imperdiet a.
    Pellentesque rutrum leo bibendum sodales commodo. Morbi magna mi, sollicitudin sed consectetur at,
    molestie sit amet nisi. Nullam nisl velit, finibus in lectus a, dapibus porttitor leo.
    Sed at sapien nec magna placerat facilisis. Donec posuere dictum semper. Ut non dui eget diam sollicitudin iaculis.
    Duis libero massa, gravida vel rhoncus sit amet, gravida in enim. Donec orci nibh, pulvinar sit amet quam vel,
    lacinia mattis purus. In tempus, est eget feugiat malesuada, mauris ante efficitur dolor,
    sit amet viverra neque lacus at orci. Etiam lacinia massa a est tincidunt egestas.

    Mauris sit amet arcu tincidunt libero ornare vestibulum. Duis convallis nunc vel nulla ultrices,
    id pretium ligula rhoncus. Maecenas a diam sem. Morbi ullamcorper feugiat pharetra. Duis gravida
    ante accumsan pulvinar faucibus. Donec eu nulla eu nulla accumsan sagittis. Maecenas ac eros non
    elit tempor maximus. Nulla mollis, odio sed consequat tempus, mi dui tincidunt felis, at cursus
    mauris massa sed augue. Aenean vulputate iaculis ligula ut luctus. Mauris id molestie sem.`
    return <Main text={message}/>;
}
function meditation()
{

    let message = `
    Sed mattis facilisis pulvinar. Integer aliquam lacus id convallis lobortis. Vivamus vestibulum
    scelerisque metus, quis semper nisl placerat vitae. Nullam sodales eros a quam tincidunt tempus.
    Sed eleifend, velit sit amet aliquet mattis, nulla tellus fringilla mi, a sagittis augue diam nec
    lorem. Morbi malesuada sit amet arcu eget vehicula. Sed vel dictum arcu, ac suscipit nisl. Vestibulum
    ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi vel sapien in
    mauris viverra auctor. Morbi vitae pharetra ipsum. Nulla ut consequat leo, nec finibus nisi.
    Curabitur viverra ultrices mattis. Maecenas vitae eros odio. Ut efficitur rutrum luctus. Maecenas
    tristique quam quis est tempor, quis suscipit ex sollicitudin.

    Cras faucibus dui eget auctor finibus. Nullam lobortis, enim eget efficitur molestie,
    nunc mi vestibulum lectus, non lobortis leo magna ut magna. Fusce interdum massa sed
    placerat egestas. Praesent scelerisque facilisis odio, et mollis quam luctus quis.
    Mauris at aliquam enim, non lobortis risus. Aenean suscipit quam at quam facilisis
    elementum. Nam sed condimentum metus. Cras semper eget neque eu sollicitudin.`
    return <Main text={message}/>;
}
function affirmation()
{

    let message = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis porta dolor,
    ut scelerisque ex accumsan sed. Suspendisse id mauris a ex volutpat porttitor vel aliquet lacus.
    Quisque vestibulum rutrum placerat. Mauris interdum turpis lacus, et interdum tortor imperdiet a.
    Pellentesque rutrum leo bibendum sodales commodo. Morbi magna mi, sollicitudin sed consectetur at,
    molestie sit amet nisi. Nullam nisl velit, finibus in lectus a, dapibus porttitor leo.
    Sed at sapien nec magna placerat facilisis. Donec posuere dictum semper. Ut non dui eget diam sollicitudin iaculis.
    Duis libero massa, gravida vel rhoncus sit amet, gravida in enim. Donec orci nibh, pulvinar sit amet quam vel,
    lacinia mattis purus. In tempus, est eget feugiat malesuada, mauris ante efficitur dolor,
    sit amet viverra neque lacus at orci. Etiam lacinia massa a est tincidunt egestas.`
    return <Main text={message}/>;
}

function login()
{
    return 
}


export default header