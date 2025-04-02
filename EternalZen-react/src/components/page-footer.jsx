//  Importing components
import Navigation from './navigation/navigation.jsx'

function footer()
{
    const footerNav = [
        {
            id: 0,
            type: 'link',
            external: false,
            name: 'Copyrights notice',
            link: '',
        },
        {
            id: 1,
            type: 'link',
            external: false,
            name: 'Terms Of Agreement',
            link: '',
        },
        {
            id: 2,
            type: 'link',
            external: false,
            name: 'Privacy Policy',
            link: '',
        },
        {
            id: 3,
            type: 'link',
            external: false,
            name: 'Contact The Team',
            link: '',
        },
    ]
    return (
    <>
        <footer>
            <Navigation arg = { footerNav } cls='flex-wrap-row' />
        </footer>
    </>)
}


export default footer