import scss from "./Welcome.module.scss";
import logo from "../../../assets/logo/Rectangle 5.png";

export const Welcome = () => {
	return (
		<section className={scss.Welcome}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.texts}>
						<p>Рекламное агенство ADVUP</p>
						<p className={scss.p}>Новый поток клиентов Вашему продукту</p>
					</div>
					<div className={scss.photos}>
						<img src={logo} alt="logo" />
						<button>Приступим</button>
					</div>
				</div>
			</div>
		</section>
	);
};
