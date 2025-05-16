import { Route,Routes } from "react-router-dom";
import AdminRegister from './components/admin/AdminRegister.jsx' ;
import AdminLogin from "./components/admin/AdminLogin";
import Admin from "./components/admin/AdminDashboard";
import ProtectedRoutes from "./components/admin/ProtectedRoutes.jsx"

const AppRoutes = () =>{
    <Routes>
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={
            <ProtectedRoutes>
                <Admin/>
            </ProtectedRoutes>
            } />
        
    </Routes>
}