import './assets/style/dashboerd.css';
import { Outlet, Link } from 'react-router-dom'; // Import Link for navigation
import SideBar from './SideBar';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
   console.log(axios)
   console.log(useEffect)
   console.log(useState)
   console.log(Link)

    return (
        <div className="dashboard-container">
            <SideBar />
            <div className="dashboard-content">
                <Outlet />
               
            </div>
        </div>
    );
}

export default Dashboard;
