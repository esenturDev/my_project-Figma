import scss from "./Footer.module.scss";
import logo from "../../../assets/logo/Group 22.png";
import logo1 from "../../../assets/logo/Vector.png";
import logo2 from "../../../assets/logo/Vector (1).png";
import logo3 from "../../../assets/logo/Vector (2).png";
import logo4 from "../../../assets/logo/Vector (3).png";
import logo5 from "../../../assets/logo/Vector (5).png";
import logo6 from "../../../assets/logo/logo-instagram (1) 1.png";

const Footer = () => {
	return (
		<footer className={scss.footer}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.contents1}>
						<div className={scss.photos}>
							<img src={logo} alt="logo" />
						</div>
						<div className={scss.texts1}>
							<p>С другой стороны рамки и место обучения кадров позволяет</p>
							<p>оценить значение направлений прогрессивного развития!</p>
						</div>
						<div className={scss.texts2}>
							<p>Блогерам</p>
							<p>Рекламодателям</p>
							<p>Пользовательское соглашение</p>
							<p>Наши кейсы</p>
							<p>Помощь</p>
						</div>
						<div className={scss.texts3}>
							<p>© 2023 ADVUP. All rights reserved.</p>
						</div>
					</div>
					<div className={scss.contents2}>
						<div className={scss.divfooterContent}>
							<p>Остались вопросы?</p>
							<button>Почта</button>
						</div>
						<div className={scss.photos}>
							<img src={logo1} alt="logo1" />
							<img src={logo2} alt="logo2" />
							<img src={logo3} alt="logo3" />
							<img src={logo4} alt="logo4" />
							<img src={logo5} alt="logo5" />
							<img src={logo6} alt="logo6" />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
