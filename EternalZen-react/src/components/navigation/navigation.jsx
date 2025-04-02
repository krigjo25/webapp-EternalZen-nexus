//  Navigation component

//Importing components
import Btn from '../misc/btn.jsx'
import Link from './links.jsx'

export default function Navigation({arg, links})
{
    const zero = 0;
    return (
    <>

        {arg && arg.length > zero }
            <nav>
                {arg && arg.map((object) => <Btn key = {object.id} btn = {object} />)}
            </nav>

        
            {links && links.length > zero }
                <nav>
                    {links.map((link) => <Link key = {link.id} link = {link} />)}
                </nav>

    </>
    );
}
