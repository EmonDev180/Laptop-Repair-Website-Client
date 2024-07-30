
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
import CheakOut from '../Pages/CheakOut/CheakOut';
import Bookings from '../Pages/Bookings/Bookings';
import PrivetRoute from '../PrivetRoute/PrivetRoute';
import AboutPage from '../Pages/aboutPage/aboutPage';

const router = createBrowserRouter ([

    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children : [
            {
                path : '/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<AboutPage></AboutPage>

            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/cheakout/:id',
                element:<PrivetRoute><CheakOut></CheakOut></PrivetRoute>,
                loader: ({params}) => fetch(`https://car-doctor-server-eta-plum.vercel.app/services/${params.id}`)
            
            },
            {
                path:'/bookings',
                element: <PrivetRoute><Bookings></Bookings></PrivetRoute>    
            }
        ]
    }


])
   
 


export default router;