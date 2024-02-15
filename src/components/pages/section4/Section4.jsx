import scss from "./Section4.module.scss";
import logo from "../../../assets/logo/Rectangle 14 (1).png";
import logo1 from "../../../assets/logo/123.png";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import logo2 from "../../../assets/logo/Rectangle 15.png";
import logo3 from "../../../assets/logo/Rectangle 13.png";
import logo4 from "../../../assets/logo/Rectangle 13 (1).png";
import logo5 from "../../../assets/logo/Rectangle 13 (2).png";
import { useState } from "react";
import Modal from "../../modal/Modal";
import { createPortal } from "react-dom";
const photos = [
	{
		id: 1,
		title: "Игровой проект War Thunder",
		text: "Специальный проект с Моргенштерном",
		img: logo,
	},
	{
		id: 2,
		title: "Казино Stake x Drake ",
		text: "Азарт, Рэп, Реклама",
		img: logo3,
	},
	{
		id: 3,
		title: "Игровой проект Free Fire",
		text: "Уникальная рекламная компания",
		img: logo4,
	},
	{
		id: 4,
		title: "VK Music",
		text: "Музыкальный сервис соц. сети ВКонтакте",
		img: logo5,
	},
];
const Section4 = () => {
	const [isModal, setIsModal] = useState(false);
	const [state, setState] = useState([]);
	const modalResult = (id) => {
		const filtred = photos.find((item) => item.id === id);
		console.log(id);
		console.log(filtred);
		setState([filtred]);
		setIsModal(true);
	};
	function modalNoo() {
		setIsModal(false);
	}
	const [sliderRef] = useKeenSlider({
		breakpoints: {
			"(min-width: 400px)": {
				slides: { perView: 1, spacing: 5 },
			},
			"(min-width: 700px)": {
				slides: { perView: 2, spacing: 5 },
			},
			"(min-width: 1000px)": {
				slides: { perView: 3, spacing: 10 },
			},
		},
		slides: { perView: 1 },
	});
	return (
		<>
			<section className={scss.section4}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.contents1}>
							<h2>Наши кейсы</h2>
							<div className={scss.image}>
								<img src={logo} alt="logo" />
							</div>
						</div>
						<div className={scss.contents22}>
							<div className={scss.card}>
								<div>
									<img src={logo1} alt="logo1" />
								</div>
								<button>Игры</button>
								<button>Коллабарация</button>
							</div>
							<div className={scss.text}>
								<p>Игровой проект War Thunder X ДУЛО</p>
							</div>
							<div className={scss.texts2}>
								<p>
									Разнообразный и богатый опыт консультация с профессионалами из
									IT играет важную роль в формировании всесторонне
									сбалансированных нововведений. Значимость этих проблем
									настолько очевидна, что новая модель организационной.
								</p>
							</div>
							<div className={scss.buttons}>
								<button>Подробнее</button>
							</div>
						</div>
					</div>
					<div className={scss.content2}>
						<div className={scss.cardsPhoto}>
							<img src={logo2} alt="logo2" />
							<div className={scss.contents}>
								<p>Общее кол-во просмотров</p>
								<h2>20.000+</h2>
							</div>
						</div>
						<div className={scss.cardsPhoto}>
							<img src={logo2} alt="logo2" />
							<div className={scss.contents}>
								<p>Лайков</p>
								<h2>20.000+</h2>
							</div>
						</div>
						<div className={scss.cardsPhoto}>
							<img src={logo2} alt="logo2" />
							<div className={scss.contents}>
								<p>охваты</p>
								<h2>20.000+</h2>
							</div>
						</div>
					</div>
					<div className={scss.content3}>
						<div ref={sliderRef} className="keen-slider">
							{photos.map((item, index) => (
								<div
									onClick={() => modalResult(item.id)}
									key={index}
									className="keen-slider__slide number-slide1">
									<div className={scss.cards}>
										<h2>{item.title}</h2>
										<p>{item.text}</p>
										<img src={item.img} alt="logo" />
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			{isModal &&
				createPortal(
					<Modal>
						{state.map((item, index) => (
							<div className={scss.modalCard} key={index}>
								<h2>{item.title}</h2>
								<p>{item.text}</p>
								<img src={item.img} alt={item.title} />
								<button onClick={modalNoo}>закрыть модальное окно</button>
							</div>
						))}
					</Modal>,
					document.getElementById("modal")
				)}
		</>
	);
};

export default Section4;
