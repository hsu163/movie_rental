import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { getLoggedInUserName, setLoggedInUserName } from '../service/authService';

export default function LogoutComponent() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:8080/api/auth/logout', {}, {
                withCredentials: true
            });
            setLoggedInUserName(''); // Clear the username from session
            navigate('/login'); // Redirect to login page
        } catch (err) {
            console.error("Logout error:", err);
        }
    };

    return (
        <div className="flex items-center gap-2">
            <span className="text-sm font-medium">
                Hello, {getLoggedInUserName()}
            </span>
            <button
                onClick={handleLogout}
                className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
                Logout
            </button>
        </div>
    );
}