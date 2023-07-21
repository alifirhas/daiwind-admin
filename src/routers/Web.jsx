import { Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import AuthRoute from "./AuthRoute";
import Welcome from "../pages/welcome/Welcome";
import Dashboard from "../pages/dashboard/Dashboard";
import UnAuthenticated from "../pages/UnAuthenticated";
import NotFound from "../pages/NotFound";
import ProtectedMiddleware from "../middleware/ProtectedMiddleware";

export default function Web() {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/app/welcome" />} />

			{/* Auth Group */}
			<Route path="/auth/*" element={<AuthRoute />} />

			{/* Dashboard */}
			<Route path="/app" element={<DashboardLayout />}>
				<Route path="welcome" element={<Welcome />} />
			</Route>

			{/* Exception */}
			<Route path="/unauthenticated" element={<UnAuthenticated />} />
			<Route path="/*" element={<NotFound />} />
		</Routes>
	);
}
