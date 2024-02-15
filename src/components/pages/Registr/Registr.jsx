import { useState } from 'react';
import scss from './Registr.module.scss';
import Input from '../../Ul/input/Input';
import { Button } from '../../Ul/button/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const url3 = import.meta.env.VITE_BEKENDT_URL3;
const Registr = () => {
  const navigate =  useNavigate();
  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const postUsers = async () => {
    const newData = {
      login: userLogin,
      password: userPassword,
    };
    try {
      const response = (await axios.post(url3, newData)).data;
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={scss.reg}>
      <div className='container'>
        <div className={scss.content}>
          <label>Регистрация</label>
          <Input type='email' value={userLogin} setData={setUserLogin} placeholder='Email'/>
          <Input type='password' value={userPassword} setData={setUserPassword} placeholder='Password'/>
          <Button onClick={postUsers}>Регистрация</Button>
        </div>
      </div>
    </div>
  )
}

export default Registr