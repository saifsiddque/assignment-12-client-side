import { createBrowserRouter } from  "react-router-dom" ;
import DashboardLayout from "../../LayOut/DashboardLayout";
import Main from "../../LayOut/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import AddProduct from "../../Pages/DashBord/AddProduct/AddProduct";
import AllBuyers from "../../Pages/DashBord/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/DashBord/AllSellers/AllSellers";
import MyOrders from "../../Pages/DashBord/MyOrders/MyOrders";
import MyProducts from "../../Pages/DashBord/MyProducts/MyProducts";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import SignUp from "../../Pages/SignUp/SignUp";
import ErrorPage from "../ErrorPage";
import PrivetRout from "./PrivetRout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/categories/:name',
                element: <PrivetRout><Products></Products></PrivetRout>,
                loader:({params}) =>{
                    return fetch(`https://assignment12-five.vercel.app/products?category=${params.name}`)
                }
            },
            
        ]
    },
    {
        path:'/dashboard',
        element: <PrivetRout><DashboardLayout></DashboardLayout></PrivetRout>,
        // loader:({params}) =>{
        //     return fetch(`https://assignment12-five.vercel.app/users?role=${params.role}`)
        // },
        children: [
            
            { 
                path:'/dashboard/allSellers',
                element:<AllSellers></AllSellers>,
                loader:() =>{
                    return fetch(`https://assignment12-five.vercel.app/users?role=seller`)
                }
            },
            { 
                path:'/dashboard/allBuyers',
                element:<AllBuyers></AllBuyers>,
                loader:() =>{
                    return fetch(`https://assignment12-five.vercel.app/users?role=buyer`)
                }
            },
            { 
                path:'/dashboard/addProduct',
                element:<AddProduct></AddProduct>
                
            },
            { 
                path:'/dashboard/myProduct/:email',
                element:<MyProducts></MyProducts>,
                loader:({params}) =>{
                    return fetch(`https://assignment12-five.vercel.app/products?email=${params.email}`)
                }
            },
            { 
                path:'/dashboard/myOrders',
                element:<MyOrders></MyOrders>
            }
        ]
    }
])
export default router ;