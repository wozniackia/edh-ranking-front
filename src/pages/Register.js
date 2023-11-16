import "../styles/Register.css";
import getDynamicBackground from "../dynamicBackgroundImage";
import { useState } from "react";
import RegisterForm from "../components/RegisterForm";

function Register() {
  
  const [backgroundStyle] = useState({
    backgroundImage: `url(${getDynamicBackground()})`,
  });

  return (
    <div className="Register" style={backgroundStyle}>
      <RegisterForm />
    </div>
  );
}

export default Register;
