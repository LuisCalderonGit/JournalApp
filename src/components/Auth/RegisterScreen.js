import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form>
        <input
          className="auth__input"
          type="text"
          placeholder="name"
          name="name"
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="text"
          placeholder="password"
          name="password"
        />
        <input
          className="auth__input"
          type="text"
          placeholder="confirm password"
          name="confirmpassword"
        />
        <button className="btn btn-primary btn-block mb-1" type="submit">
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
