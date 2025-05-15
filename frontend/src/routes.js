import { Route,Routes } from "react-router-dom";
import AdminLogin from "./components/admin/AdminLogin";
import Admin from "./components/admin/AdminDashboard";
import ProtectedRoutes from "./components/admin/ProtectedRoutes.jsx"

const AppRoutes = () =>{
    <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={
            <ProtectedRoutes>
                <Admin/>
            </ProtectedRoutes>
            } />
        
    </Routes>
}