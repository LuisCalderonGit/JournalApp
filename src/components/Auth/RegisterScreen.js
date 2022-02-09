import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export const RegisterScreen = () => {


  const [formValues, handleInputChange] = useForm({
    name: 'Luis Calderon',
    email: 'luis@gmail.com',
    password: '1234',
    confirmPassword: '1234'
  });

  const { name, email, password, confirmPassword } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(name, email, password, confirmPassword)
  }

  const isOkForm = () => {

  }
  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form onSubmit={handleRegister}>
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
