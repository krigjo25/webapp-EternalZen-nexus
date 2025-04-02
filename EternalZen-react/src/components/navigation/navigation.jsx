//  Navigation component

//Importing components
import Btn from '../misc/btn.jsx'
import Link from './links.jsx'

export default function Navigation({buttons, links})
{
    return (
    <nav>
        {buttons && buttons.map((button) => (
            <Btn key = {button.id} btn = {button} />))}

        {links && links.map((link) => (
            <Link key = {link.id} link = {link} />))}
    </nav>
    );
}
