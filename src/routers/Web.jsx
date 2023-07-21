import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Welcome from "../features/welcome/Welcome";
import Dashboard from "../features/dashboard/Dashboard";
import AuthRoute from "./AuthRoute";
import UnAuthenticated from "../features/UnAuthenticated";
import NotFound from "../features/NotFound";

export default function Web() {
	const ProtectedRoute = () => {
		const isAuth = false;

		return isAuth ? <Outlet /> : <Navigate to="/auth/login" />;
	};

	return (
		<Routes>
			<Route path="/" element={<Navigate to="/app/welcome" />} />

			{/* Auth Group */}
			<Route path="/auth/*" element={<AuthRoute />} />

			{/* Dashboard */}
			<Route path="/app">
				<Route path="welcome" element={<Welcome />} />
				<Route
					path="private"
					element={
						<ProtectedRoute>
							<Dashboard />
						</ProtectedRoute>
					}
				/>
			</Route>

			{/* Exception */}
			<Route path="/unauthenticated" element={<UnAuthenticated />} />
			<Route path="/*" element={<NotFound />} />
		</Routes>
	);
}