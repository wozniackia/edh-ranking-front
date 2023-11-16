function LoginForm() {
  if (sessionStorage.getItem("authenticated") !== "true") {
    return (
      <div className="LoginForm">
        <h1>Zaloguj się</h1>
        <label htmlFor="login">Username:</label>
        <input
          type="text"
          id="login"
          name="login"
          placeholder="Twój username"
        />
        <label htmlFor="password">Hasło:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Twoje hasło"
        />
        <a className="forgotPassword" href="/reset-password">
          Zapomniałeś hasła?
        </a>
        <button className="mainButton" onClick={login}>
          Zaloguj się
        </button>
        lub
        <a className="signUp" href="/register">
          Zarejestruj się
        </a>
      </div>
    );
  }
}

function login() {
  fetch(`${process.env.REACT_APP_BACKEND_URI}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: document.getElementById("login").value,
      password: document.getElementById("password").value,
    }),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      if (data.message !== "Bad Request") {
        sessionStorage.setItem("access_token", data.access_token);
        sessionStorage.setItem("username", data.username);
        sessionStorage.setItem("authenticated", true);
        window.location.reload();
      } else {
        sessionStorage.removeItem("access_token");
        sessionStorage.removeItem("username");
        sessionStorage.setItem("authenticated", false);
      }
    })
    .catch((error) => console.log(error));
}

export default LoginForm;
