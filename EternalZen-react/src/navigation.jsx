//  Navigation component

//Importing components
import Btn from './btn.jsx'

export default function Navigation({data})
{
    
    return (
    <nav>
        <Btn btn = {{ data }} />
        <button onClick>What is Spirituality</button>
        <button onClick>What is meditation</button>
        <button onClick>What is Affirmation</button>
        <button onClick>Login</button>
    </nav>
    );
}
