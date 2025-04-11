//  EternalZen-footer content

//  Importing components
import Navigation from './navigation/navigation.jsx'

function footer()
{
    const footerNav = 
    [
        {
            id: 0,
            type: 'link',
            external: false,
            name: 'Copyrights notes',
            link: '/copynotes',
        },
        {
            id: 1,
            type: 'link',
            external: false,
            name: 'Terms Of Agreement',
            link: '/toa',
        },
        {
            id: 2,
            type: 'link',
            external: false,
            name: 'Privacy Policy',
            link: '/pp',
        },
        {
            id: 3,
            type: 'link',
            external: false,
            name: 'Contact The Team',
            link: '/contactus',
        },
    ]
    return (
    <>
        <Navigation arg = { footerNav } cls={'flex-wrap-row-justify-space-evenly' + ' isp-100' } />
    </>
    )
}

//  Exporting the component
export default footer