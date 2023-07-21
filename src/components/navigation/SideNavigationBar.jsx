import logo from "../../assets/icons/dot.svg";
import SideNavigationItem from "./SideNavigationItem";

export default function SideNavigationBar({ closeSideBar }) {
	return (
		<div
			className={`w-80 h-ful bg-base-100 ${
				closeSideBar
					? "-translate-x-full lg:translate-x-0"
					: "translate-x-0 lg:-translate-x-full"
			} transition-transform duration-150 ease-in shadow-xl flex flex-col`}
		>
			{/* Logo dan tombol close */}
			<div className="flex flex-row justify-between py-2 px-2">
				<a className="text-xl flex content-center items-center gap-2 h-12 py-2 pl-4">
					{/* Logo */}
					<img src={logo} alt="" className="h-8 w-8" />
					{/* Project name*/}
					<div>DaiWind</div>
				</a>
			</div>

			{/* Menus */}
			<div className="flex flex-col">
				{/* item menu */}
				<SideNavigationItem to="/app/dashboard" title="Dashboard" iconTag="heroicons:home" />
			</div>
		</div>
	);
}
