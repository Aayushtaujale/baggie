import { useState } from "react";

import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="login mt-5">
      <div className="loginsecond">
        <div className="roww">
          <div className="topic">
            <p>{message}</p>

            <div>
              <h1>Login Here</h1>
            </div>
            <form>
              <div class="formgroup">
                <label className="login-label txtc">Email</label>
                <input
                  type="text"
                  className="login-input"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>

              <div class="formgroup">
                <label className="login-label txtc">Password</label>
                <input
                  type="password"
                  className="login-input"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>

              <button type="submit" className="login-input-btn">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
