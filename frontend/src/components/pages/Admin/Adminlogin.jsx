import { useState } from "react";
import axios from "axios";

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/admin/login", new URLSearchParams({
                username,
                password
            }));
            localStorage.setItem("token", res.data.access_token);
            window.location.href = "/dashboard"; // redirect on success
        } catch (err) {
            setError("Invalid credentials");
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto mt-20 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleLogin}>
                <label>Username : </label>
                <input className="w-full p-2 border mb-3" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                <label>Password : </label>
                <input className="w-full p-2 border mb-3" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button className="bg-blue-600 text-white w-full p-2 rounded" type="submit">Login</button>
            </form>
        </div>
    );
};

export default AdminLogin;
