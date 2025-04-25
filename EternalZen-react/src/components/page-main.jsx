//  EternalZen Main content

//  Importing dependencies
import Article from './misc/article.jsx';
import { storeObject } from '../utils/stores.js';

//  Importing components
import UserAuthorization from '../components/misc/authoricate-user.jsx';


export default function main()
{
    const {object, setObject, clearObject} = storeObject();

    return (
        <>
        {object ? (<Article article = {object}/>) : null}
        <UserAuthorization />
        </>
        
    );
}