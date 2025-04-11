import { Navigate, Outlet } from 'react-router-dom';
import { isLoggedIn } from '../service/authService';


export default function ProtectedRoute() {
    return isLoggedIn() ? <Outlet /> : <Navigate to="/login" replace />;
}