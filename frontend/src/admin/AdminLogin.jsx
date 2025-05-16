import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/admin/login', { username, password });
            localStorage.setItem('adminToken', data.token);
            navigate('/admin/dashboard');
        } catch (err) {
            alert('Login failed: ' + err.response.data.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center text-black bg-gray-100">
            <form className="bg-white p-6 rounded shadow-md w-80" onSubmit={loginHandler}>
                <h2 className="text-xl font-bold mb-4">Admin Login</h2>
                <label htmlFor="">Username</label>
                <input
                    type="text"
                    placeholder="Username"
                    className="block w-full mb-3 border p-2"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    className="block w-full mb-3 border p-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Login
                </button>
            </form>
        </div>
    );
}

export default AdminLogin;
