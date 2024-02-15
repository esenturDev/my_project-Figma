import scss from "./Section5.module.scss";
import logo from "../../../assets/logo/Frame 16.png";
import logo1 from "../../../assets/logo/Frame 17.png";
import logo2 from "../../../assets/logo/Frame 18.png";
import logo3 from "../../../assets/logo/Frame 19.png";

const Section5 = () => {
	return (
		<section className={scss.section5}>
			<div className="container">
				<div className={scss.content}>
					<h3>Наши преимущества</h3>
					<div className={scss.photos}>
						<img src={logo} alt="logo" />
						<img src={logo1} alt="logo1" />
					</div>
					<div className={scss.photos}>
						<img src={logo2} alt="logo2" />
						<img src={logo3} alt="logo3" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section5;


// import scss from './Result.module.scss';
// import { NavLink } from "react-router-dom";
// import { useLocation } from "react-router-dom";

// const links = [
// 	{
// 		name: "Iphone11",
// 		href: "/",
// 	},
// 	{
// 		name: "Iphone12",
// 		href: "/Iphone12",
// 	},
// 	{
// 		name: "Iphone13",
// 		href: "/Iphone13",
// 	},
// 	{
// 		name: "Iphone14",
// 		href: "/Iphone14",
// 	},
//   {
//     name: 'Iphone15',
//     href: "/Iphone15",
//   }
// ];
// export const Result = () => {
//   const location = useLocation();
// 	console.log(location.pathname);
//   return (
//     <>
//       <nav>
// 				<ul>
// 					{links.map((item, index) => (
// 						<li key={index}>
// 							<NavLink
// 								to={item.href}
// 								className={
// 									location.pathname === item.href
// 										? `${scss.link} ${scss.active}`
// 										: `${scss.link}`
// 								}>
// 								{item.name}
// 							</NavLink>
// 						</li>
// 					))}
// 				</ul>
// 			</nav>
//     </>
//   )
// }