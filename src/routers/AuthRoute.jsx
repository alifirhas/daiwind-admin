import { Route, Routes } from "react-router-dom";
import Login from "../features/login/Login";
import Register from "../features/register/Register";
import ForgotPassword from "../features/forgot_password/ForgotPassword";
import ResetPassword from "../features/reset_password/ResetPassword";

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
