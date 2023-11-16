import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "../styles/Profile.css";
import getDynamicBackground from "../dynamicBackgroundImage";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({"firstName": "Name", "lastName": "", "username": "Username", "password": "********"});
  const [shownPassword, setShownPassword] = useState(false);
  const [backgroundStyle] = useState({ backgroundImage: `url(${getDynamicBackground()})` });

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URI}/api/v1/player/${sessionStorage.getItem('username')}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProfile(data);
      })
      .catch((error) => console.log(error));
  }, []);

  function logout() {
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("username");
    sessionStorage.setItem("authenticated", false);
    navigate("/")
  }

  function switchShownPassword() {
    setShownPassword(!shownPassword)
  }

  return (
    <div
      className="App"
      id="Home"
      style={backgroundStyle}
    >
      <div className="Profile">Your profile</div>
      <div className="PlayerName">{`${profile["firstName"]} ${profile["lastName"]}`}</div>
      <div className="PlayerUsername">
        <FontAwesomeIcon icon={faUser} /> {profile["username"]}
      </div>
      <div className="PlayerPassword">
      <button className="passwordButton" onClick={switchShownPassword}><FontAwesomeIcon icon={faLock} /></button> {shownPassword || !profile["password"] ? profile["password"] : '*'.repeat(profile["password"].length)}
      </div>
      <button className="mainButton" onClick={logout}>Log out</button>
    </div>
  );
}

export default Profile;
