import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/img.png';
import googleLogo from '../assets/googleLogo.png';
import logo from '../assets/logo.png';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState('');
    const { login, isLoggedIn } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        if (username === "michaelw" && password === "michaelwpass") {
            try {
                const response = await fetch('https://dummyjson.com/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });
                const data = await response.json();
                if (response.ok) {
                    login(data);
                    navigate('/dashboard');
                } else {
                    setError(data.message || 'Failed to login');
                }
            } catch (error) {
                console.error('Login error:', error);
                setError('Network error');
            }
        } else {
            setError('Invalid username or password');
        }
    };

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div className='container'>
            <div className='row w-75 m-auto login-form'>
                <div className="col-md-6 form-right-content-div">
                    <img src={logo} alt="Logo" className="mb-4 login-logo"/>
                    <h1>Welcome back</h1>
                    {isLoggedIn ? (
                        <p>You are logged in. Redirecting to dashboard...</p>
                    ) : (
                        <form onSubmit={handleSubmit} className='pt-3'>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Email or username</label>
                                <input
                                    type="text"
                                    className="form-control form-input"
                                    id="username"
                                    placeholder="wesley.mendoza@example.com"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control form-input"
                                    id="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-group form-check d-flex justify-content-between">
                                <div>
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="rememberMe"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label className="form-check-label" htmlFor="rememberMe">
                                        Keep me signed in
                                    </label>
                                </div>
                                <a href="#" className="ml-auto d-flex align-items-center">
                                    Forgotten Password?
                                </a>
                            </div>
                            {error && <div className='text-danger' role="alert">{error}</div>}
                            <button type="submit" className="btn btn-primary sign-in-btn">Sign in</button>
                            <button className="btn btn-outline-secondary secondary-button d-flex align-items-center justify-content-center gap-2">
                                <img src={googleLogo} alt="Google" style={{ width: '18px' }} />
                                Sign in with Google
                            </button>
                            <p className="mt-3 d-flex justify-content-center gap-1">
                                Have not joined yet? <a href="/signup">Sign in</a>
                            </p>
                        </form>
                    )}
                </div>
                <div className="col-md-6 d-lg-block d-md-none d-sm-none pe-0 ps-0 login-form-img">
                    <img src={backgroundImage} className='img-fluid h-100' alt="Background"/>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
