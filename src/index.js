import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Main } from './Components/Main.tsx';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Cats } from './Components/Cats.tsx';
import { Rick } from './Components/Rick.tsx';
import { Table } from './Components/Table.tsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main.Body />,
    children: [
      {
        path: "/",
        element: <Table.Cars />
      },
      {
        path: "/cats",
        element: <Cats.Cat />
      },
      {
        path: "/rick",
        element: <Rick.Ricks />
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
