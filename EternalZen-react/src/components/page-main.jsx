//  EternalZen Main content
//  Importing dependencies
import Article from './article.jsx';
import { storeObject } from '../utils/stores.js';

export default function index()
{
    const {object, setObject, clearData} = storeObject();

    return (
        <>
        {object ? (<Article article = {object}/>) : null}
        
        </>
        
    );
}