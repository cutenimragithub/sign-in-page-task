import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; 

function DashboardPage() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); 
        navigate('/login');
    };

    return (
        <div className="container">
            <div className="row vh-100 justify-content-center align-items-center">
                <div className="col-md-8 text-center">
                    <h1>Welcome to the the Login Page</h1>
                    <p>You have successfully logged in. </p>
                    <button onClick={handleLogout} className="">Sign Out</button>
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;
