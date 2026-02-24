import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { Navigate, Outlet, useLocation } from "react-router";

export default function ProtectedRoutes() {
    const token = useSelector((s: RootState) => s.auth.authToken);
    const location = useLocation();

    if (!token) {
        return (
            <Navigate
                to="/auth"
                state={{ from: location }}
                replace
            />
        );
    }

    return <Outlet />;
}