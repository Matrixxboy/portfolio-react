import { Navigate } from "react-router-dom";
const ProtectedRoutes = ({children}) =>{
    const token = localStorage.getItem("adminToken");
    return token ? children : <Navigate to="/admin/login" />;
};

export default ProtectedRoutes;