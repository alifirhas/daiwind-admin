import { Outlet } from "react-router-dom";
import TopNavigationBar from "../components/navigation/TopNavigationBar";
import { useEffect, useState } from "react";
import SideNavigationBar from "../components/navigation/SideNavigationBar";

export default function DashboardLayout() {
	const [pageTitle, setPageTitle] = useState("Rumah");

	function handlePageTitleChange(newTitle) {
		setPageTitle((currentPageTitle) => {
			return newTitle;
		});
	}

	return (
		<>
			<div className="drawer lg:drawer-open">
				<div className="drawer-content flex flex-col h-screen">
					{/* Top navigation bar*/}
					<TopNavigationBar pageTitle={pageTitle} />

					{/* <!-- Page content here --> */}
					<div className="p-4 w-full h-full bg-base-200 overflow-auto">
						<Outlet context={[handlePageTitleChange]} />
					</div>
				</div>

				{/* sidebar checkbox controller */}
				<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

				{/* Left side navigation bar */}
				<div className="drawer-side z-20">
					<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
					{/* <!-- Sidebar content here --> */}
					<SideNavigationBar />
				</div>
			</div>
		</>
	);
}
