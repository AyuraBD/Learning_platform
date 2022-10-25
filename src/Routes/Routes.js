import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Courses from '../components/Courses/Courses';
import Login from '../components/Login/Login';
import Main from '../components/Main/Main';

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