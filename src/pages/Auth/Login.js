import React from "react";
import { useForm } from "react-hook-form";
import { Link,useNavigate } from "react-router-dom";
import {yupResolver} from '@hookform/resolvers/yup'
import Navbar from "../../components/Navbar/Navbar";
import * as yup from "yup";


import "./AuthPage.css";
const Login = () => {
  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data);
    navigate("/");
  };

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(12).required()
  });

  
  const { register, handleSubmit, formState : {errors} } = useForm({
    resolver : yupResolver(schema)
  });



  return (
    <div className="authpage">
      <Navbar reloadNavbar={false} />

      <div className="authcont">
        <form className="authform" onSubmit={handleSubmit(onSubmit)}>
            <div className="heading">
            <h2>Login</h2>
            </div>
          <div className="formgroup">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email")} />
            <p>{errors.email ?.message}</p>
          </div>
          <div className="formgroup">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register("password")} />
            <p>{errors.password ?.message}</p>
          </div>
          <Link to="/forgetpassword" className="stylenone">
            <p>Forgot password?</p>
          </Link>
          <input className="submit" value="login" type="submit" />
          <h2 className="or">OR</h2>
          <Link to="/signup" className="stylenone">
            <button className="btn">Signup</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
