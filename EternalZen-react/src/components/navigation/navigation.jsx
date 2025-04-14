//  Navigation component

//Importing components
import Btn from '../misc/btn.jsx'
import Link from './links.jsx'

export default function Navigation({ arg, cls })
{
    const minLength = 0;

    return (
    <>

        {arg && arg.length > minLength }
            <nav className={cls}>
                {arg && arg.map((object) => 
                <>
                    {object.type == "button" && (<Btn key = {object.id} btn = {object} />)}
                    {object.type == "link" && (<Link key = {object.id} obj = {object} />)}         
                </>
                )}
            </nav>
    </>
    );
}
