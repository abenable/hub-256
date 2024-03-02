import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setCookie] = useCookies(["authToken"]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://hub-256-cf70c3960fba.herokuapp.com/auth/login",
        {
          email,
          password,
        }
      );
      setCookie("authToken", response.data.access_token);
      alert(`${response.data.message}`);
      navigate("/");
    } catch (error) {
      console.error("Error submitting email", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="button-18" type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;
