import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ForgotPassword from "../pages/forgot_password/ForgotPassword";
import ResetPassword from "../pages/reset_password/ResetPassword";
import AuthLayout from "../layouts/AuthLayout";

export default function AuthRoute() {
	return (
		<>
			<Routes>
				<Route element={<AuthLayout />}>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
					<Route path="/reset-password" element={<ResetPassword />} />
				</Route>
			</Routes>
		</>
	);
}
