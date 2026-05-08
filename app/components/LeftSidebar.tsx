"use client";

import Link from "next/link";
import {
	Home,
	User,
	Compass,
	MessageCircle,
	Bell,
	Bookmark,
	Settings,
	LucideIcon,
} from "lucide-react";

type MenuItem = {
	name: string;
	href: string;
	icon: LucideIcon;
};

const menuItems: MenuItem[] = [
	{
		name: "Home",
		href: "/",
		icon: Home,
	},
	{
		name: "Profile",
		href: "/profile",
		icon: User,
	},
	{
		name: "Explore",
		href: "/explore",
		icon: Compass,
	},
	{
		name: "Messages",
		href: "/messages",
		icon: MessageCircle,
	},
	{
		name: "Notifications",
		href: "/notifications",
		icon: Bell,
	},
	{
		name: "Saved",
		href: "/saved",
		icon: Bookmark,
	},
	{
		name: "Settings",
		href: "/settings",
		icon: Settings,
	},
];

export default function LeftSidebar() {
	return (
		<aside className="w-full max-w-[280px]">
			<div className="sticky top-5 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">

				{/* Logo */}
				<div className="border-b border-gray-100 px-6 py-5">
					<h1 className="text-2xl font-bold tracking-tight text-gray-900">
						Social<span className="text-blue-600">Hub</span>
					</h1>

					<p className="mt-1 text-sm text-gray-500">
						Connect with people
					</p>
				</div>

				{/* Navigation */}
				<nav className="flex flex-col gap-2 p-4">
					{menuItems.map((item: MenuItem, index: number) => {
						const Icon = item.icon;

						return (
							<Link
								key={index}
								href={item.href}
								className="group flex items-center gap-4 rounded-2xl px-4 py-3 text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
							>
								<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
									<Icon size={20} />
								</div>

								<span className="text-[15px] font-medium">
									{item.name}
								</span>
							</Link>
						);
					})}
				</nav>

				{/* Bottom Card */}
				<div className="m-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-5 text-white">
					<h3 className="text-lg font-semibold">
						Grow your network
					</h3>

					<p className="mt-2 text-sm text-blue-100">
						Connect and share moments with your friends.
					</p>

					<button className="mt-4 w-full rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-gray-100">
						Invite Friends
					</button>
				</div>
			</div>
		</aside>
	);
}