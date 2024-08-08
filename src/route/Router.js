import { Children } from "react";
import Layout from "../layout/Layout";
import Home2 from '../component/home/home2'

export const ROUTES =[
    {
        path:"",
        element:<Layout/>,
        children: [
            {
                path:"",
                element: <Home2/>
            },
            {
                path: "/home",
                element: <Home2/>
            }
        ] 
    }
]