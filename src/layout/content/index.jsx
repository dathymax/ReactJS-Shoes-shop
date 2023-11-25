import React from "react";
import { Outlet } from "react-router-dom";

const LayoutContent = () => {
	return (
		<section className="container m-auto my-10">
			<Outlet />
		</section>
	);
};

export default LayoutContent;
