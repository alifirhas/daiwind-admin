import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function SideNavigationItem({
	iconTag = "heroicons:squares-2x2",
	title = "Menu",
	to = "/",
}) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				isActive
					? "w-full pl-5 pr-2 py-4 mb-2 hover:bg-base-200 flex gap-2 content-center border-l-4 border-secondary-focus"
					: "w-full pl-5 pr-2 py-4 mb-2 hover:bg-base-200 flex gap-2 content-center hover:border-l-4 hover:border-secondary"
			}
		>
			{/* Icon */}
			<Icon icon={iconTag} height={24} width={24} />
			{/* Name */}
			<span className="font-semibold">{title}</span>
		</NavLink>
	);
}
