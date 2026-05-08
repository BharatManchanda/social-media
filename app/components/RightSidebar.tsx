"use client";

import Image from "next/image";
import {
	Flame,
	UserPlus,
	TrendingUp,
	BadgeCheck,
} from "lucide-react";

type Trend = {
	tag: string;
	posts: string;
};

type FollowUser = {
	name: string;
	username: string;
	image: string;
	verified?: boolean;
};

const trends: Trend[] = [
	{
		tag: "#NextJS",
		posts: "18.2K Posts",
	},
	{
		tag: "#React",
		posts: "24.5K Posts",
	},
	{
		tag: "#WebDevelopment",
		posts: "12.1K Posts",
	},
	{
		tag: "#AI",
		posts: "32.8K Posts",
	},
];

const followUsers: FollowUser[] = [
	{
		name: "Jane Smith",
		username: "@janesmith",
		image: "https://i.pravatar.cc/150?img=32",
		verified: true,
	},
	{
		name: "Alex Johnson",
		username: "@alexjohnson",
		image: "https://i.pravatar.cc/150?img=12",
	},
	{
		name: "Michael Lee",
		username: "@michaellee",
		image: "https://i.pravatar.cc/150?img=15",
		verified: true,
	},
];

export default function RightSidebar() {
	return (
		<aside className="flex w-full flex-col gap-5">

			{/* Trending Section */}
			<div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">

				<div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
					<div className="flex items-center gap-2">
						<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
							<TrendingUp size={20} />
						</div>

						<div>
							<h3 className="text-base font-semibold text-gray-900">
								Trending
							</h3>

							<p className="text-xs text-gray-500">
								Popular topics right now
							</p>
						</div>
					</div>
				</div>

				<div className="p-4">
					{trends.map((trend: Trend, index: number) => (
						<button
							key={index}
							className="group flex w-full items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 hover:bg-gray-50"
						>
							<div className="flex items-center gap-3">
								<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
									<Flame size={18} />
								</div>

								<div className="text-left">
									<h4 className="text-sm font-semibold text-gray-800">
										{trend.tag}
									</h4>

									<p className="text-xs text-gray-500">
										{trend.posts}
									</p>
								</div>
							</div>
						</button>
					))}
				</div>
			</div>

			{/* Who To Follow */}
			<div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">

				<div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
					<div className="flex items-center gap-2">
						<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
							<UserPlus size={20} />
						</div>

						<div>
							<h3 className="text-base font-semibold text-gray-900">
								Who to follow
							</h3>

							<p className="text-xs text-gray-500">
								Suggested for you
							</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-3 p-4">
					{followUsers.map((user: FollowUser, index: number) => (
						<div
							key={index}
							className="flex items-center justify-between rounded-2xl p-2 transition-all duration-300 hover:bg-gray-50"
						>
							<div className="flex items-center gap-3">

								{/* <Image
									src={user.image}
									alt={user.name}
									width={48}
									height={48}
									className="rounded-full object-cover"
								/> */}

								<div>
									<div className="flex items-center gap-1">
										<h4 className="text-sm font-semibold text-gray-800">
											{user.name}
										</h4>

										{user.verified && (
											<BadgeCheck
												size={16}
												className="fill-blue-500 text-white"
											/>
										)}
									</div>

									<p className="text-xs text-gray-500">
										{user.username}
									</p>
								</div>
							</div>

							<button className="rounded-xl bg-gray-900 px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:bg-blue-600">
								Follow
							</button>
						</div>
					))}
				</div>
			</div>
		</aside>
	);
}