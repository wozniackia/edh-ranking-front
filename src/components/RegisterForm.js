import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const navigate = useNavigate();

  if (sessionStorage.getItem("authenticated") !== "true") {
    return (
      <div className="LoginForm">
        <h1>Zarejestruj się</h1>
        <label htmlFor="firstName">Imię:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Twoje imię"
        />
        <label htmlFor="lastName">Nazwisko:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Twoje nazwisko"
        />
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Twój username"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Type your password"
        />
        <button className="mainButton" onClick={() => register(navigate)}>
          Zarejestruj się
        </button>
      </div>
    );
  }
}

function register(navigate) {
  console.log(JSON.stringify({
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  }))
  fetch(`${process.env.REACT_APP_BACKEND_URI}/api/v1/player/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    }),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      if (data.firstName === document.getElementById("firstName").value &&
          data.lastName === document.getElementById("lastName").value && 
          data.username === document.getElementById("username").value && 
          data.password === document.getElementById("password").value) {
        navigate("/register-success");
      } else {
        window.location.reload();
      }
    })
    .catch((error) => {
      console.log(error)
    });
}

export default RegisterForm;
