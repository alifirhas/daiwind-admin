import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

export default function TopNavigationBar({ pageTitle = "" }) {
	const [notifications, setNotifications] = useState([
		{
			id: crypto.randomUUID(),
			title: "Notification 1",
		},
		{
			id: crypto.randomUUID(),
			title: "Notification 2",
		},
		{
			id: crypto.randomUUID(),
			title: "Notification 3",
		},
	]);

	const [themeIcon, setThemeIcon] = useState(() => {
		const localThemeIcon = localStorage.getItem("CURRENTTHEMEICON");
		if (localThemeIcon == null) return "heroicons:sun";

		return localThemeIcon;
	});

	const [profilePic, setProfilePic] = useState(
		"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
	);

	useEffect(() => {
		localStorage.setItem("CURRENTTHEMEICON", themeIcon);
	}, [themeIcon]);

	function changeThemeIcon(iconTag) {
		setThemeIcon((currentThemeIcon) => {
			return iconTag;
		});
	}

	function deleteNotification(id) {
		setNotifications((currentNotifications) => {
			return currentNotifications.filter(
				(notifications) => notifications.id != id
			);
		});
	}

	return (
		<>
			<div className="navbar bg-base-100 shadow-md z-10">
				{/* Left section */}
				<div className="flex-none">
					<label
						className="btn btn-square btn-ghost drawer-button lg:hidden"
						htmlFor="my-drawer-2"
					>
						<Icon
							icon="heroicons:squares-2x2-20-solid"
							height={20}
							width={20}
						/>
					</label>
				</div>

				{/* Title */}
				<div className="flex-1">
					<a className="btn btn-ghost text-xl normal-case">{pageTitle}</a>
				</div>

				{/* Right Section */}
				<div className="flex-none">
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost btn-circle">
							<Icon icon={themeIcon} width={20} height={20} />
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<button
									data-set-theme="light"
									data-act-class="ACTIVECLASS"
									onClick={() => setThemeIcon("heroicons:sun")}
								>
									<Icon icon="heroicons:sun" />
									Light
								</button>
							</li>
							<li>
								<button
									data-set-theme="dark"
									data-act-class="ACTIVECLASS"
									onClick={() => setThemeIcon("heroicons:moon")}
								>
									<Icon icon="heroicons:moon" />
									Dark
								</button>
							</li>
							<li>
								<button
									data-set-theme="cupcake"
									data-act-class="ACTIVECLASS"
									onClick={() => setThemeIcon("mingcute:cupcake-line")}
								>
									<Icon icon="mingcute:cupcake-line" />
									Cupcake
								</button>
							</li>
						</ul>
					</div>
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost btn-circle">
							<div className="indicator">
								<Icon icon="heroicons:bell" width={20} height={20} />
								<span className="badge badge-sm badge-primary indicator-item">
									{notifications.length}
								</span>
							</div>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							{notifications.length === 0 ? (
								<li>
									<a>Notifikasi Kosong</a>
								</li>
							) : (
								""
							)}
							{notifications.map((notification) => {
								return (
									<li key={notification.id}>
										<a onClick={() => deleteNotification(notification.id)}>
											{notification.title}
										</a>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full">
								<img src={profilePic} />
							</div>
						</label>
						<ul
							tabIndex={0}
							className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<a className="justify-between">
									<div className="flex flex-row gap-2 items-center">
										<Icon icon="heroicons:user" />
										Profile
									</div>
									<span className="badge">New</span>
								</a>
							</li>
							<li>
								<a className="flex flex-row gap-2">
									<Icon icon="heroicons:wrench-screwdriver" />
									<span>Settings</span>
								</a>
							</li>

							<li>
								<div className="divider my-0"></div>
							</li>

							<li>
								<a
									className="flex flex-row gap-2 text-red-500"
									onClick={() => window.logout_modal.showModal()}
								>
									<Icon icon="heroicons:arrow-left-on-rectangle" />
									<span>Logout</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Logout modal */}
			{/* Open the modal using ID.showModal() method */}
			<dialog id="logout_modal" className="modal">
				<form method="dialog" className="modal-box">
					<h3 className="font-bold text-lg">Ingin Logout?</h3>
					<p className="py-4">
						Tekan tombol ESC atau Tidak untuk membatalkan, <br /> tombol Ya
						untuk logout.
					</p>
					<div className="modal-action">
						{/* if there is a button in form, it will close the modal */}
						<button
							className="btn btn-warning"
							onClick={() => console.log("Jadi logout")}
						>
							Ya
						</button>
						<button
							className="btn"
							onClick={() => console.log("Tidak jadi logout")}
						>
							Tidak
						</button>
					</div>
				</form>
			</dialog>
		</>
	);
}
