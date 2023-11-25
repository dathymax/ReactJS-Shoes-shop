import React from "react";

const LayoutFooter = () => {
	return (
		<footer className="grid grid-cols-12 gap-3 container m-auto">
			<ul className="col-span-3">
				<li className="uppercase font-bold mb-5">Tổng đài hỗ trợ</li>
				<li className="mb-3">
					Liên hệ đặt hàng:{" "}
					<span className="font-bold">0987654321</span>
				</li>
				<li className="mb-3">
					Thắc mắc đơn hàng:{" "}
					<span className="font-bold">0987654321</span>
				</li>
				<li className="mb-3">
					Góp ý, khiếu nại:{" "}
					<span className="font-bold">0987654321</span>
				</li>
			</ul>

			<ul className="col-span-3">
				<li className="uppercase font-bold mb-5">Về Clothes</li>
				<li className="mb-3 font-medium">Giới thiệu</li>
				<li className="mb-3 font-medium">Liên hệ</li>
				<li className="mb-3 font-medium">Tuyển dụng</li>
				<li className="mb-3 font-medium">Tin tức</li>
				<li className="mb-3 font-medium">Hệ thống cửa hàng</li>
			</ul>

			<ul className="col-span-3">
				<li className="uppercase font-bold mb-5">
					Chăm sóc khách hàng
				</li>
				<li className="mb-3 font-medium">Chính sách đổi trả</li>
				<li className="mb-3 font-medium">Chính sách bảo hành</li>
				<li className="mb-3 font-medium">Chính sách hoàn tiền</li>
			</ul>

			<ul className="col-span-3">
				<p className="text-blue-600 text-4xl font-bold mb-5">Clothes</p>
				<p>
					Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho
					hàng triệu người tiêu dùng Việt. Hãy cùng Clothes hướng đến
					một cuộc sống năng động, tích cực hơn.
				</p>
			</ul>
		</footer>
	);
};

export default LayoutFooter;
