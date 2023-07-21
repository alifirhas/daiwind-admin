import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedMiddleware() {
	const isAuth = false;

	return isAuth ? <Outlet /> : <Navigate to="/auth/login" />;
}
