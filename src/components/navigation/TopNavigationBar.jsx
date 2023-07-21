import { Icon } from "@iconify/react";

export default function TopNavigationBar({
	onClickLogo,
	closeSideBar = false,
}) {
	return (
		<div className="navbar bg-base-100 shadow z-10 ">
			<label
				className="btn btn-square rounded-sm bg-primary lg:hidden"
				onClick={() => onClickLogo()}
			>
				{closeSideBar ? (
					<Icon
						icon="heroicons:bars-3-bottom-left-solid"
						height={20}
						width={20}
						className="swap-off fill-current"
					/>
				) : (
					<Icon
						icon="heroicons:x-mark-20-solid"
						height={20}
						width={20}
						className="swap-on fill-current"
					/>
				)}
			</label>
			<div className="flex-1 ml-2">
				<span className="text-xl">Dashboard</span>
			</div>
			<div className="flex-none">
				<div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost btn-circle">
						<div className="indicator">
							<Icon icon="heroicons:bell" width={20} height={20} />
							<span className="badge badge-xs badge-primary indicator-item"></span>
						</div>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a>Notification 1</a>
						</li>
						<li>
							<a>Notification 2</a>
						</li>
					</ul>
				</div>
				<div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
						</div>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a className="justify-between">
								Profile
								<span className="badge">New</span>
							</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
