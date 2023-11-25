import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout";
import HomePage from "./pages/home";

function App() {
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
