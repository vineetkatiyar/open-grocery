import React, { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup";
import Navbar from "../../components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import "./AuthPage.css";

const Signup = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    fullName: yup.string().required(),
    phone: yup.number().positive().integer().min(10).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(12).required(),
    cPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });

  const { register, handleSubmit } = useForm({
    resolver : yupResolver(schema)
  });


  const onSubmit = (data) => {
    console.log(data);
    navigate("/");
  };

  return (
    <div className="authpage">
      <Navbar reloadnavbar={false} />

      <div className="authcont">
        <form className="authform" onSubmit={handleSubmit(onSubmit)}>
          <div className="heading">
            <h2>Signup</h2>
          </div>
          <div className="form-group-row">
            <div className="formgroup">
              <label htmlFor="fname">First Name</label>
              <input type="text" id="fname" {...register("fullName")} />
              {/* <p>{errors.fullName ?.message}</p> */}
            </div>
            <div className="formgroup">
              <label htmlFor="lname">Phone /Mobile no.</label>
              <input type="number" id="lname" {...register("phone")} />
              {/* <p>{errors.phone ?.message}</p> */}

            </div>
          </div>
          <div className="formgroup">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email")} />
              {/* <p>{errors.email ?.message}</p> */}
          </div>

          <div className="form-group-row">
            <div className="formgroup">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" {...register("password")} />
              {/* <p>{errors.password ?.message}</p> */}

            </div>
            <div className="formgroup">
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="password"
                id="cpassword"
                {...register("cPassword")}
              />
              {/* <p>{errors.cPassword ?.message}</p> */}
            </div>
          </div>

          <Link to="/login" className="stylenone">
            <p>Already have an account?</p>
          </Link>
          <input className="submit" value="signup" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
