import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login/Login.jsx';
import RegisterForm from './components/RegisterForm/RegisterForm.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegisterForm></RegisterForm>,
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <RegisterForm></RegisterForm>,
  },
  {
    path:"home",
    element:<App/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
