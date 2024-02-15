import scss from "./Section6.module.scss";
import axios from "axios";
import { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo/Group 31.png";
import logo1 from "../../../assets/logo/Group 30.png";
import logo2 from "../../../assets/logo/Vector 1 (1).png";
import logo3 from "../../../assets/logo/Vector 4.png";

export const Section6 = () => {
	const url = import.meta.env.VITE_BEKENDT_URL;
	const url2 = import.meta.env.VITE_BEKENDT_URL2;
	const [result, setResult] = useState(false);
	const [inputValue1, setInputValue1] = useState("");
	const [inputValue2, setInputValue2] = useState("");
	const [inputValue3, setInputValue3] = useState("");
	const [inputValue4, setInputValue4] = useState("");
	const [isAdvertiser, setIsAdvertiser] = useState(false); // Добавляем состояние, чтобы определить, является ли пользователь рекламодателем или блогером

	const postUsers = async () => {
		const newData = {
			value1: inputValue1,
			value2: inputValue2,
			value3: inputValue3,
			value4: inputValue4,
		};
		try {
			const response = (await axios.post(isAdvertiser ? url2 : url, newData)).data; // Выбираем URL в зависимости от состояния isAdvertiser
			toast.success("🦄 Wow so easy!", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
				transition: Bounce,
			});

			setInputValue1("");
			setInputValue2("");
			setInputValue3("");
			setInputValue4("");

			console.log(response);
		} catch (error) {
			console.log(error);
			alert("Error");
		}
	};

	return (
		<>
			<ToastContainer />
			<section className={scss.section6}>
				<div className={scss.divphotos}>
					<div className={scss.photos1}>
						<img className={scss.logo1} src={logo2} alt="logo2" />
						<img className={scss.logo2} src={logo} alt="logo" />
					</div>
					<div className={scss.photos2}>
						<img className={scss.logo1} src={logo3} alt="logo3" />
						<img className={scss.logo2} src={logo1} alt="logo1" />
					</div>
				</div>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.div1}>
							<h2>Оставить заявку</h2>
							<p>Рекламные агентства имеют опыт работы в разных отраслях и</p>
							<p>знают, как эффективно привлекать целевую аудиторию.</p>
						</div>
						<div className={scss.div2}>
							<p>Кто по жизни?</p>
							<div className={scss.texts}>
								<button
									onClick={() => {
										setResult(false);
										setIsAdvertiser(false); // Устанавливаем, что пользователь не рекламодатель
									}}
									className={`${scss.button2} ${!isAdvertiser && scss.active}`}>
									Блогер
								</button>
								<button
									onClick={() => {
										setResult(true);
										setIsAdvertiser(true); // Устанавливаем, что пользователь рекламодатель
									}}
									className={`${scss.button2} ${isAdvertiser && scss.active}`}>
									Рекламодатель
								</button>
							</div>
						</div>
						<div className={scss.div3}>
							<div className={scss.inputslabel}>
								<label>Ваше имя</label>
								<input
									type="text"
									placeholder="Введите ваше имя"
									value={inputValue1}
									onChange={(e) => setInputValue1(e.target.value)}
								/>
							</div>
							<div className={scss.inputslabel}>
								<label>Почта</label>
								<input
									type="text"
									placeholder="Введите электронную почту"
									value={inputValue2}
									onChange={(e) => setInputValue2(e.target.value)}
								/>
							</div>
							<div className={scss.inputslabel}>
								<label>Телефон</label>
								<input
									type="number"
									placeholder="Введите ваш номер телефона"
									value={inputValue3}
									onChange={(e) => setInputValue3(e.target.value)}
								/>
							</div>
							<div className={scss.inputslabel2}>
								<label>Комментарий</label>
								<input
									type="text"
									placeholder="Введите ваш номер телефона"
									value={inputValue4}
									onChange={(e) => setInputValue4(e.target.value)}
								/>
							</div>
						</div>
						<div className={scss.div4}>
							<button onClick={postUsers}>Отправить</button>
							<div className={scss.pa}>
								<p>Нажав на кнопку, вы соглашаетесь на</p>
								<a href="#">обработку персональных данных</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
