import React from 'react';
import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import "./Login.css";
import Card from '../UI/Card';

const Login = (props) => {
  const navigation = useNavigate()
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const handleLogin = () => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (formValues.email === loggedUser.email && formValues.password === loggedUser.password) {
      localStorage.setItem("loggedin", true);
      navigation("/employee")
    } else {
      alert("Enter valid login credentials")
    }
  };

  return (
    <div className='login'>
      <Card>
        <h1>LOGIN</h1>
        <div className='login-page'>
          <form onSubmit={submitHandler}>
            <label>EMAIL</label>
            <input
              type="text"
              name='email'
              onChange={changeHandler}
              value={formValues.email} />
            <label>PASSWORD</label>
            <input
              type="password"
              name='password'
              onChange={changeHandler}
              value={formValues.password} />
            <button className='button'
              type="submit"
              onClick={() => handleLogin()}
            >Log In</button>
            <p>Don't have an account?<NavLink style={{ color: "blue" }}
              to="/">Register</NavLink></p>
          </form>
        </div>
      </Card>
    </div>
  )
}

export default Login;