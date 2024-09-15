import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { config } from "../config";
import messages from "../messages/lang/en/user.json";
import { setUser } from "../redux/actions/UserAction";
import Layout from "../components/Layout";
import Button from "../components/Button";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const endpoint = config.url;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrMsg("");

    if (!email || !password) {
      setErrMsg(messages.emptyFieldError);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(endpoint + "/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();

        dispatch(setUser(true, data.name));
        setLoading(false);
        navigate("/");
      } else {
        const data = await response.json();
        console.error("Login failed:", data);
        setErrMsg(data.message || messages.serverError);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrMsg(messages.serverError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title="Login">
      <div>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              onChange={(e) => {
                setEmail(e.target.value);
                setErrMsg("");
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
                setErrMsg("");
              }}
            />
          </div>
          <Link to="/forgot-password" className="linkAlt">
            Forgot password?
          </Link>
          <Button
            type="submit"
            title="Login"
            loading={loading}
            text="Login"
            full
            customStyle={{ marginTop: "2rem" }}
          />
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </Layout>
  );
}
