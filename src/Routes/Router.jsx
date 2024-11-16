
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../Layouts/HomeLayout';
import CategoryNews from '../Pages/CategoryNews';
import AuthLayout from '../Layouts/AuthLayout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,

        children: [
            {
                path: "",
                element: <Navigate to="/category/01"></Navigate>,
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: ({ params }) => fetch(
                    `https://openapi.programming-hero.com/api/news/category/${params.id}`
                ),
            },
        ],
    },
    {
        path: "/news",
        element: <h1>News layout</h1>,
    },
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                path: "/auth/login",
                element: <h2>Login</h2>,
            },
            {
                path: "/auth/register",
                element: <h2>Register</h2>,
            },
        ],
    },
    {
        path: "*",
        element: <h1 className='text-4xl text-center mt-72'>Error <span className='text-red-600 font-bold'>!!!</span></h1>,
    },
])

export default router;


// {
//     path: "",
//     element: <Navigate to={"/category/01"}></Navigate>,
// },


// children: [
//
// ],