import { Outlet } from "react-router-dom";

export default function AuthLayout() {
	return (
		<>
			<h1>This is Auth Layout</h1>
			<div>
				<Outlet />
			</div>
		</>
	);
}
