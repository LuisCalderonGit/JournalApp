import React from "react";
import { Link } from "react-router-dom";
import validator from "validator";


import { useForm } from "../../hooks/useForm";

export const RegisterScreen = () => {


  const [formValues, handleInputChange] = useForm({
    name: 'Luis Calderon',
    email: 'luis@gmail.com',
    password: '12345',
    confirmPassword: '12345'
  });

  const { name, email, password, confirmPassword } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isOkForm()) {
      console.log('Formulario correcto');
    }
  }

  const isOkForm = () => {
    if (name.trim().length === 0) {
      console.log('name is required');
      return false;
    } else if (!validator.isEmail(email)) {
      console.log('email is not validate');
      return false;
    } else if (password !== confirmPassword || password.length < 5) {
      console.log("password short");
      return false;
    }

    return true;
  }
  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form onSubmit={handleRegister}>

        <div className="auth__alert-error">
          Hola
        </div>

        <input
          value={name}
          onChange={handleInputChange}
          className="auth__input"
          type="text"
          placeholder="name"
          name="name"
          autoComplete="off"
        />
        <input
          value={email}
          onChange={handleInputChange}
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
        />
        <input
          value={password}
          onChange={handleInputChange}
          className="auth__input"
          type="password"
          placeholder="password"
          name="password"
        />
        <input
          value={confirmPassword}
          onChange={handleInputChange}
          className="auth__input"
          type="password"
          placeholder="confirm password"
          name="confirmpassword"
        />
        <button className="btn btn-primary btn-block mb-1" type="submit" /* onClick={handleRegister} */>
          Register
        </button>


        <Link
          to="/auth/login"
          className="link"
        >
          Already registered?
        </Link>
      </form>
    </>
  );
};
