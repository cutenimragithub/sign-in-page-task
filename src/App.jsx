import React from 'react';
import LoginPage from './components/LogIn';
import DashboardPage from './components/DashboardPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css'
import './css/responsive.css'


function App() {
    return (
        <>
        <Router>
            <AuthProvider>
            <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/" element={<LoginPage />} />
                </Routes>
            </AuthProvider>
            </Router>
        </>
    );
}



export default App;
