import scss from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Input from "../../Ul/input/Input";
import { Button } from "../../Ul/button/Button";
import { createPortal } from "react-dom";
import Modal from "../../modal/Modal";

const url3 = import.meta.env.VITE_BEKENDT_URL3;

export const Login = () => {
	const navigate = useNavigate();
	const [modal, setModal] = useState(false);
	const [userLogin, setUserLogin] = useState("");
	const [userPassword, setUserPassword] = useState("");

  const getUsers = async () => {
    try {
      const response = (await axios.get(url3)).data;
      const findUsers = response.find((item) => item.login === userLogin && item.password === userPassword);
      if(findUsers) {
        localStorage.setItem('isAuth', findUsers._id)
        navigate('/home')
      } else {
        setModal(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

	return (
		<>
			<div className={scss.logindiv}>
				<div className="container">
					<div className={scss.content}>
						<label>Login</label>
						<Input type="email" value={userLogin} setData={setUserLogin} placeholder='Email'/>
						<Input
						placeholder='Password'
							type="password"
							value={userPassword}
							setData={setUserPassword}
						/>
						<Button onClick={getUsers}>Login</Button>
					</div>
				</div>
			</div>
      {modal && createPortal(
        <Modal>
          <h1>Error</h1>
          <Button onClick={() => setModal(false)}>закрыть модальное окно</Button>
        </Modal>,
        document.getElementById('modal')
      )}
		</>
	);
};
