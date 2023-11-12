import "../styles/Api.css";
import getDynamicBackground from "../dynamicBackgroundImage";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Element404({ uri }) {
  const [path, setPath] = useState(useLocation().pathname);
  const [apiReturn, setApiReturn] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URI}${path}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(JSON.stringify(data))
        setApiReturn(JSON.stringify(data));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      className="App"
      id="Home"
      style={{ backgroundImage: `url(${getDynamicBackground()})` }}
    >
      <div className="hero-text">{apiReturn}</div>
    </div>
  );
}

export default Element404;
