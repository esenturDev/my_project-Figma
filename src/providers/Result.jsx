import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Result = ({ children }) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const isAuth = localStorage.getItem("isAuth");
	const resultLocal = !!isAuth;
	useEffect(() => {
		if (resultLocal && pathname === "/login") {
			navigate("/home");
		} else if (resultLocal && pathname === "/registr") {
			navigate("/home");
		} else if (!resultLocal && pathname === "/home") {
			navigate("/");
		} else if (resultLocal && pathname === "/") {
			navigate("/home");
		}
	}, [pathname]);
	return children;
};

export default Result;
