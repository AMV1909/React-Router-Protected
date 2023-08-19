import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute({ isAllowed, children, redirecTo = "/" }) {
    if (!isAllowed) return <Navigate to={redirecTo} />;

    return children ? children : <Outlet />;
}
