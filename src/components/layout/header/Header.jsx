// import scss from "./Header.module.scss";
// import logo from "../../../assets/logo.svg";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// export const Header = () => {
// 	const [isBurgerMenu, setIsBurgerMenu] = useState(false);
// 	const navigate = useNavigate();
// 	console.log(isBurgerMenu);
// 	const links = [
// 		{
// 			name: "Блогерам",
// 			href: "/",
// 		},
// 		{
// 			name: "Рекламодателям",
// 			href: "/",
// 		},
// 		{
// 			name: "Кейсы",
// 			href: "/",
// 		},
// 		{
// 			name: "Контакты",
// 			href: "/",
// 		},
// 		// {
// 		// 	button: "Exit",
// 		// },
// 	];
// 	function removeUsers() {
// 		localStorage.removeItem("isAuth");
// 		navigate("/");
// 	}

// 	return (
// 		<header className={scss.header}>
// 			<div className="container">
// 				<div className={scss.content}>
// 					<div className={scss.left}>
// 						<div className={scss.logo}>
// 							<img src={logo} alt="logo" />
// 						</div>
// 						<nav className={scss.nav}>
// 							<ul>
// 								{links.map((item, index) => (
// 									<li key={index}>
// 										<a href={item.href}>{item.name}</a>
// 										{/* <button>{item.button}</button> */}
// 									</li>
// 								))}
// 							</ul>
// 						</nav>
// 					</div>
// 					<div className={scss.right}>
// 						<button>Оставить заявку</button>
// 						<button onClick={removeUsers}>Exit</button>
// 						<div className={scss.burger__button}>
// 							<label>
// 								<input
// 									type="checkbox"
// 									checked={isBurgerMenu}
// 									onChange={() => setIsBurgerMenu(!isBurgerMenu)}
// 								/>
// 								<span></span>
// 								<span></span>
// 								<span></span>
// 								{/* <button onClick={removeUsers}></button> */}
// 							</label>
// 						</div>
// 						<div
// 							className={
// 								isBurgerMenu
// 									? `${scss.burger_munu} ${scss.active}`
// 									: `${scss.burger_munu}`
// 							}>
// 							<nav>
// 								{links.map((item, index) => (
// 									<li key={index}>
// 										<a href={item.href}>{item.name}</a>
// 										{/* <button onClick={removeUsers}>Exit</button> */}
// 									</li>
// 								))}
// 							</nav>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</header>
// 	);
// };

import scss from "./Header.module.scss";
import logo from "../../../assets/logo.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
	const [isBurgerMenu, setIsBurgerMenu] = useState(false);
	const navigate = useNavigate();
	console.log(isBurgerMenu);

	const links = [
		{
			name: "Блогерам",
			href: "/",
		},
		{
			name: "Рекламодателям",
			href: "/",
		},
		{
			name: "Кейсы",
			href: "/",
		},
		{
			name: "Контакты",
			href: "/",
		},
		// {
		// 	button: "Exit",
		// },
	];

	function removeUsers() {
		localStorage.removeItem("isAuth");
		navigate("/");
	}

	return (
		<header className={scss.header}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.left}>
						<div className={scss.logo}>
							<img src={logo} alt="logo" />
						</div>
						<nav className={scss.nav}>
							<ul>
								{links.map((item, index) => (
									<li key={index}>
										<a href={item.href}>{item.name}</a>
									</li>
								))}
							</ul>
						</nav>
					</div>
					<div className={scss.right}>
						<button>Оставить заявку</button>
						<button onClick={removeUsers}>Exit</button>
						{/* {isBurgerMenu ? <button className={scss.button22}>Ваша кнопка</button> : null} */}
						<div className={scss.burger__button}>
							<label>
								<input
									type="checkbox"
									checked={isBurgerMenu}
									onChange={() => setIsBurgerMenu(!isBurgerMenu)}
								/>
								<span></span>
								<span></span>
								<span></span>
							</label>
						</div>
						<div
							className={
								isBurgerMenu
									? `${scss.burger_munu} ${scss.active}`
									: `${scss.burger_munu}`
							}>
							<nav>
								{links.map((item, index) => (
									<li key={index}>
										<a href={item.href}>{item.name}</a>
										<button className={scss.button22}>Ваша кнопка</button>
									</li>
								))}
							</nav>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
