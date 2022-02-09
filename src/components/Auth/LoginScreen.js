import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {
  /* useDispatch +> darle acceso al dispatch */

  const dispatch = useDispatch();

  const { loading } = useSelector(state => state.ui)
  console.log(loading);
  const [formValues, handleInputChange] = useForm({
    email: 'luis@gmail.com',
    password: '123456',
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();

    // if (isOkFormLogin) {
    dispatch(startLoginEmailPassword(email, password));
    // }
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };



  // const isOkFormLogin = () => {
  //   if (!validator.isEmail(email)) {
  //     console.log('Email not valid');
  //     return false;
  //   }
  //   else if (password.lenght < 6) {
  //     console.log('Password must contain more than 6 characters');
  //     return false;
  //   }

  //   return true;
  // }

  return (
    <>
      <h3 className="auth__title">Login</h3>

      <form onSubmit={handleLogin}>

        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-primary btn-block"
          type="submit"
          disabled={loading}
        >
          Login
        </button>

        <hr />

        <div className="auth__social-networks">
          <p>Login with social media</p>

          <div className="google-btn"
            onClick={handleGoogleLogin}
          >
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>

          <Link to="/auth/register" className="link">Create new account</Link>
        </div>
      </form>
    </>
  );
};
