import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "./Register.css";
import Card from '../UI/Card';

const Register = (props) => {

  const navigation = useNavigate()
  const initialValues = {
    name: "",
    email: "",
    password: ""
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 & isSubmit) {
      console.log(formValues)
    }
  }, [formErrors])


  const validate = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter valid email address!"
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } 
    return errors;
  };

  const handleRegister = () => {
    localStorage.setItem("user", JSON.stringify(formValues));

    if (formValues.name !== '' &&
      formValues.email !== '' && formValues.password !== '') {
      navigation('/login')
    }
  };
  return (
    <div className='register'>
      <Card>
        <h1>REGISTER</h1>
        <div className='register-page'>
          <form onSubmit={submitHandler}>
            <label>NAME</label>
            <input
              type="text"
              name='name'
              onChange={changeHandler}
              value={formValues.name} />
            <p className='error-msg'>{formErrors.name}</p>
            <label>EMAIL</label>
            <input
              type="email"
              name='email'
              onChange={changeHandler}
              value={formValues.email} />
            <p className='error-msg'>{formErrors.email}</p>
            <label>PASSWORD</label>
            <input
              type="password"
              name='password'
              onChange={changeHandler}
              value={formValues.password} />
            <p className='error-msg'>{formErrors.password}</p>
            <button className='button'
              type="submit"
              onClick={() => handleRegister()}
            >REGISTER</button>
            <p>Already have an account?<NavLink style={{ color: "blue" }}
              to="/login">Login</NavLink></p>
          </form>
        </div>
      </Card>
    </div>
  )
}

export default Register;