import logo from "../../assets/icons/dot.svg";
import SideNavigationItem from "./SideNavigationItem";

export default function SideNavigationBar({ closeSideBar }) {
	const navigationItems = [
		{
			id: crypto.randomUUID(),
			to: "/app/dashboard",
			title: "Dashboard",
			iconTag: "heroicons:home",
		},
		{
			id: crypto.randomUUID(),
			to: "/app/welcome",
			title: "Welcome",
			iconTag: "heroicons:home",
		},
	];

	return (
		<ul className="h-full w-80 bg-base-100 text-base-content">
			{/* <!-- Sidebar content here --> */}
			<li className="flex flex-row justify-between py-2 px-2 hover:bg-base-200 mb-2">
				<a className="text-xl flex content-center items-center gap-2 h-12 py-2 pl-4">
					{/* Logo */}
					<img src={logo} alt="" className="h-8 w-8" />
					{/* Project name*/}
					<div>DaiWind</div>
				</a>
			</li>

			{navigationItems.map((navItem) => {
				return (
					<li key={navItem.id}>
						<SideNavigationItem
							to={navItem.to}
							title={navItem.title}
							iconTag={navItem.iconTag}
						/>
					</li>
				);
			})}
		</ul>
	);
}
