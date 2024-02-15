import scss from "./RegistrHome.module.scss";
import logo from "../../../assets/logo/Logo Icon 1.png";
import logo2 from "../../../assets/logo/Group 162532.png";
import { useNavigate } from "react-router-dom";
export const RegistrHome = () => {
  const navigate =  useNavigate();
  const login = () => {
    navigate('/login')
  }
	return (
		<div className={scss.resultHome}>
			<div className="container">
				<div className={scss.content}>
					<header className={scss.header}>
						<div className={scss.div1}>
							<img src={logo} alt="photo" />
							<p>Enver</p>
						</div>
						<nav className={scss.navbar}>
							<p className={scss.home}>Home</p>
							<p>Services</p>
							<p>Our Project</p>
							<p>About us</p>
						</nav>
						<div className={scss.buttons}>
							<button onClick={login}>Login</button>
							<button onClick={() => navigate('/registr')}>Sign Up</button>
						</div>
					</header>
					<main>
						<div className={scss.contents2}>
							<div className={scss.div2}>
								<p>Build Your Awesome Platform</p>
							</div>
							<div className={scss.texts}>
								<p>
									Enver studio is a digital studio that offers several services
								</p>
								<p>
									{" "}
									such as UI/UX Design to developers, we will provide the best
								</p>
								<p> service for those of you who use our services.</p>
							</div>
							<div className={scss.buttons2}>
								<button>Our Services</button>
							</div>
						</div>
						<div className={scss.photos}>
							<img src={logo2} alt="logo2" />
						</div>
					</main>
				</div>
			</div>
		</div>
	);
};
