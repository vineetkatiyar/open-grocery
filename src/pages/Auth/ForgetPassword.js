import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <div className="authpage">
      <Navbar reloadnavbar={false} />

      <div className="authcont">

        <form className="authform">
            <div className="heading">
            <h2>Forgot Password</h2>
            </div>

          <div className="formgroup">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>

          <div className="form-group-row">
            <div className="formgroup">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="formgroup">
              <label htmlFor="cpassword">Confirm New Password</label>
              <input type="password" id="cpassword" />
            </div>
          </div>

          <Link to="/login" className="stylenone">
            <p>Try Login again?</p>
          </Link>
          <Link to="/signup" className="stylenone">
            <button className="btn">Verify</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
