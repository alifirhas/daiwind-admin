import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ForgotPassword from "../pages/forgot_password/ForgotPassword";
import ResetPassword from "../pages/reset_password/ResetPassword";

export default function AuthRoute() {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/forgot-password" element={<ForgotPassword />} />
			<Route path="/reset-password" element={<ResetPassword />} />
		</Routes>
	);
}
