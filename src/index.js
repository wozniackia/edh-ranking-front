import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Nav from './components/Nav';
import Home from './pages/Home'
import PlayerRanking from './pages/PlayerRanking';
import CommanderRanking from './pages/CommanderRanking';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ranking",
    element: <PlayerRanking />,
  },
  {
    path: "/commanders",
    element: <CommanderRanking />,
  },
  {
    path: "/about-us",
    element: <Home />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
