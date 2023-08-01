import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Header } from './Component/Header';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Home } from './Component/Home';
import { About } from './Component/about';
import { Contact } from './Component/contact';
import { Form } from './Component/form';
import { Data } from './Component/Data';
import { Term } from './Component/term';
import { Neighbour } from './Component/neighbour';
import { FbAuth } from './Component/fbAuth';
import { GoogleAuth } from './Component/googleAuth';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header.Body />,
    children: [
      {
        path: "/home",
        element: <Home.Body />
      },
      {
        path: "/about",
        element: <About.Body />
      },
      {
        path: "/contact",
        element: <Contact.Body />
      },
      {
        path: "/signup",
        element: <Form.Body />
      },
      {
        path: "/",
        element: <Data.Body />
      },
      {
        path: "/term",
        element: <Term.Body />
      },
      {
        path: "/neighbour/:id",
        element: <Neighbour.Body />
      },
      {
        path: "/fbAuth",
        element: <FbAuth.Body />
      },
      {
        path: "/googleAuth",
        element: <GoogleAuth.Body />
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
