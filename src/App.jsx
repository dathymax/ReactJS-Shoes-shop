import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import MainLayout from "./layout";
import HomePage from "./pages/home";
import { useEffect } from "react";

function App() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === "/") {
            navigate("/home");
        }
    }, [pathname])

	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route index path="/" element={<HomePage />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/products" element={<HomePage />} />
				<Route path="/accessory" element={<HomePage />} />
				<Route path="/contact" element={<HomePage />} />
			</Route>
		</Routes>
	);
}

export default App;
