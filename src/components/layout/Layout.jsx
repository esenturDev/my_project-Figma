import { Routes } from "react-router-dom";
import HomePages from "../pages/HomePages";
import scss from "./Layout.module.scss";
import Footer from "./footer/Footer";
import { Header } from "./header/Header";
import { Route } from "react-router-dom";
import { RegistrHome } from "./registrHome/RegistrHome";
import { useLocation } from "react-router-dom";
import { Login } from "../pages/login/Login";
import Registr from "../pages/Registr/Registr";

const Layout = () => {
	const { pathname } = useLocation();
	if (pathname === "/login") {
		return (
			<Routes>
				<Route path="/login" element={<Login />} />
			</Routes>
		);
	} else if (pathname === "/registr") {
		return (
			<Routes>
				<Route path="/registr" element={<Registr />} />
			</Routes>
		);
	} else if (pathname === "/") {
		return (
			<Routes>
				<Route path="/" element={<RegistrHome />} />
			</Routes>
		);
	}
	return (
		<div className={scss.layout}>
			<Header />
			<main>
				<Routes>
					<Route path="/home" element={<HomePages />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
