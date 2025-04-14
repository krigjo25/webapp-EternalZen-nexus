//  Router configurations for the EternalZen application

//  Importing necessary dependencies
import { createBrowserRouter } from 'react-router-dom';

//  Importing layouts components

//  Importing page components
import App from './App.jsx';
import Loc from './pages/loc.jsx';
import Pp from './pages/privacy-policy.jsx';
import NotFound from './pages/not-found.jsx';
import Main from './components/page-main.jsx';
import Ctt from './pages/contact-the-team.jsx';
import CopyNotes from './pages/copy-notes.jsx';
import Toa from './pages/terms-of-agreement.jsx';
import RegisterUser from './pages/authoricate-user.jsx';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children:
        [
            {
                index: true, element: <Main />
            },
            {
                path:'user-authorization', element: <RegisterUser />
            },
            {
                path: 'loc', element: <Loc />
            },
            {
                path: 'terms-of-agreement', element: <Toa />
            },
            {
                path: 'contact-the-team', element: <Ctt />
            },
            {
                path:'privacy-policy', element: <Pp />
            },
            {
                path:'copy-notes', element: <CopyNotes/>
            },

            // 404 Not Found page
            { path:'*', element: <NotFound/> }


        ]
    },
    //  other top-level routes

])
