//  Importing components
import Navigation from './navigation/navigation.jsx'

function footer()
{
    const links = [
        {
            name: 'Copyrights notice',
            link: '',
        },
        {
            name: 'Terms Of Agreement',
            link: '',
        },
        {
            name: 'Privacy Policy',
            link: '',
        },
        {
            name: 'Contact The Team',
            link: '',
        },
    ]
    return (
    <>
        <footer>
            <Navigation links = { links } buttons = {null} />
        </footer>
    </>)
}


export default footer