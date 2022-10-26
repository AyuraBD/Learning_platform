import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from '../components/Blog/Blog';
import Courses from '../components/Courses/Courses';
import Faq from '../components/Faq/Faq';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Main from '../components/Main/Main';
import NotFound from '../components/NotFound/NotFound';
import Register from '../components/Register/Register';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element: <Main></Main>,
            children:[
                {
                    path:'/home',
                    element:<Home></Home>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/courses',
                    element:<Courses></Courses>
                },
                {
                    path:'/register',
                    element:<Register></Register>
                },
                {
                    path:'/faq',
                    element:<Faq></Faq>
                },
                {
                    path:'/blog',
                    element:<Blog></Blog>
                },
                {
                    path:'*',
                    element:<NotFound></NotFound>
                }

            ]
        }
        
    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Routes;