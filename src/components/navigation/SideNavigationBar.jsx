export default function SideNavigationBar({ closeSideBar }) {
	return (
		<div
			className={`w-80 h-ful bg-red-200 ${
				closeSideBar
					? "-translate-x-full lg:translate-x-0"
					: "translate-x-0 lg:-translate-x-full"
			} transition-transform duration-150 ease-in`}
		>
			aa
		</div>
	);
}
