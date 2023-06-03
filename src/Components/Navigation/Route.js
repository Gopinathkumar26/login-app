import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Register from '../SignIn/Register';
import Login from '../SignIn/Login';
import Employee from '../Employees/Employee';

const Route = createBrowserRouter([
    {path:"/", element: <Register/>},
    {path:"/login", element: <Login/>},
    {path:"/employee", element: <Employee/>}
])
  

export default Route;