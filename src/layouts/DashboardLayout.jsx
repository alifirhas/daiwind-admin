import { Outlet } from "react-router-dom";
import TopNavigationBar from "../components/navigation/TopNavigationBar";
import { useEffect, useState } from "react";
import SideNavigationBar from "../components/navigation/SideNavigationBar";

export default function DashboardLayout() {
	// Tutup side navbar
	const [closeSideBar, setCloseSideBar] = useState(() => {
		const localValue = localStorage.getItem("CLOSESIDEBAR")

		if (localValue == null) return false

		return localValue === 'true'
	});

	useEffect(() => {
		// Simpan state close side bar ke local storage
		localStorage.setItem("CLOSESIDEBAR", closeSideBar.toString());
	}, [closeSideBar]);

	// Fungsi untuk buka tutup side navbar
	const handleCloseSideBar = () => {
		setCloseSideBar((state) => !state);
		console.log(closeSideBar);
	};

	return (
		<>
			<div className="flex flex-row h-screen">
				{/* Side Navigation bar */}
				<SideNavigationBar closeSideBar={closeSideBar} />

				{/* Content */}
				<div
					className={`h-full w-full ${
						closeSideBar ? "-ml-80 lg:ml-0" : "ml-0 lg:-ml-80"
					} transition-all duration-150 ease-in flex flex-col`}
				>
					{/* Top Navigation Bar */}
					<TopNavigationBar onClickLogo={handleCloseSideBar} closeSideBar={closeSideBar}/>

					{/* Main Content */}
					<div className="p-4 bg-base-200 h-full">
						{/* This is main content */}
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
}
