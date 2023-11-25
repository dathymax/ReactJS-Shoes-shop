import React from "react";
import { Link, useLocation } from "react-router-dom";

const LINKS = [
	{
		label: "Trang chủ",
		href: "/home",
	},
	{
		label: "Sản phẩm",
		href: "/products",
	},
	{
		label: "Phụ kiện",
		href: "/accessory",
	},
	{
		label: "Liên hệ",
		href: "/contact",
	},
];

const HeaderNavigation = () => {
	const { pathname } = useLocation();

	return (
		<nav className="grid grid-cols-12 container m-auto gap-3 sticky top-10 my-4">
			<ul className="col-span-5 flex items-center gap-10">
				{LINKS.map((link) => (
					<li
						key={link.href}
						className={`inline-block text-xl font-medium hover:text-blue-500 ${
							pathname === link.href
								? "text-blue-500"
								: "text-black"
						}`}
					>
						<Link to={link.href}>{link.label}</Link>
					</li>
				))}
			</ul>
			<p className="col-span-2 text-center text-blue-600 text-3xl font-bold">
				Clothes
			</p>
		</nav>
	);
};

export default HeaderNavigation;
