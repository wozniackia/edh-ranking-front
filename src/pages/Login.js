import "../styles/Login.css";
import getDynamicBackground from "../dynamicBackgroundImage";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginForm from "../components/LoginForm";

function Login() {
  const navigate = useNavigate();
  const [backgroundStyle] = useState({ backgroundImage: `url(${getDynamicBackground()})` });

  useEffect(() => {
    if (sessionStorage.getItem("authenticated") === "true") {
      navigate("/profile");
    }
  }, [navigate, backgroundStyle])

  return (
    <div
      className="Login"
      style={backgroundStyle}
    >
      <LoginForm />
    </div>
  );
}

export default Login;
