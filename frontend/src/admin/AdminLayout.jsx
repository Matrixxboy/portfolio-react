// src/components/admin/AdminLayout.jsx
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div className="min-h-screen bg-gray-950 text-white p-6">
            <h1 className="text-center text-2xl font-bold mb-4">Admin Panel</h1>
            <Outlet />
        </div>
    );
};

export default AdminLayout;
