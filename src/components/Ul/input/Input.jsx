import scss from "./Input.module.scss";

const Input = ({ type, value, setData, placeholder }) => {
	return (
		<input
    placeholder={placeholder}
			className={scss.input}
			type={type}
			value={value}
			onChange={(e) => setData(e.target.value)}
		/>
	);
};

export default Input;
