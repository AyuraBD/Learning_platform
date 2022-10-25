import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Courses from '../components/Courses/Courses';
import Login from '../components/Login/Login';
import Main from '../components/Main/Main';
import Register from '../components/Register/Register';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element: <Main></Main>,
            children:[
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