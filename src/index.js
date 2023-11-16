import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Nav from './components/Nav';
import Home from './pages/Home'
import Tournaments from './pages/Tournaments';
import Rules from './pages/Rules';
import PlayerRanking from './pages/PlayerRanking';
import CommanderRanking from './pages/CommanderRanking';
import Login from './pages/Login'
import Element404 from './pages/404';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './pages/Register';
import Profile from './pages/Profile';
import TournamentRegister from './pages/TournamentRegister';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tournaments",
    element: <Tournaments />,
  },
  {
    path: "/rules",
    element: <Rules />,
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
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/tournamentRegister",
    element: <TournamentRegister />,
  },
  {
    path: "/*",
    element: <Element404 />
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