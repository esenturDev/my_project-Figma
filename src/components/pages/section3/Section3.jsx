import scss from "./Section3.module.scss";
import logo from "../../../assets/logo/Layer 1.png";
import logo1 from "../../../assets/logo/2.png";
import logo2 from "../../../assets/logo/image 14.png";
import logo3 from "../../../assets/logo/Group 1.png";
import logo4 from "../../../assets/logo/image 16 (Traced).png";
import logo5 from "../../../assets/logo/layer1.png";
import logo6 from "../../../assets/logo/7.png";

// import scss from "../section3/Section3.module.scss";
import { useKeenSlider } from "keen-slider/react";
const animation = { duration: 5000, easing: (t) => t };
const brands = [
	{
		logo: logo,
	},
	{
		logo: logo1,
	},
	{
		logo: logo2,
	},
	{
		logo: logo3,
	},
	{
		logo: logo4,
	},
	{
		logo: logo5,
	},
	{
		logo: logo6,
	},
];
export const Section3 = () => {
	const [sliderRef] = useKeenSlider({
		breakpoints: {
			"(min-width: 1000px)": {
				slides: { perView: 5, spacing: 10 },
			},
		},
		slides: { perView: 2, spacing: 10 },
		loop: true,
		renderMode: "performance",
		drag: false,
		created(s) {
			s.moveToIdx(5, true, animation);
		},
		updated(s) {
			s.moveToIdx(s.track.details.abs + 5, true, animation);
		},
		animationEnded(s) {
			s.moveToIdx(s.track.details.abs + 5, true, animation);
		},
	});
	return (
		<section className={scss.Section3}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.cards} ref={sliderRef}>
						{brands.map((item, index) => (
							<div key={index} className="keen-slider__slide">
								<img src={item.logo} alt="brand" />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
