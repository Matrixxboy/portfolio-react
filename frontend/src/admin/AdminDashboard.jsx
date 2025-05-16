import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/admin/login');
            return;
        }

        axios.get('/api/admin/dashboard', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => setMessage(res.data.message))
            .catch(() => {
                localStorage.removeItem('adminToken');
                navigate('/admin/login');
            });
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-2xl text-white">Admin Dashboard</h1>
            <p className="text-white mt-4">{message}</p>
        </div>
    );
}

export default AdminDashboard;
