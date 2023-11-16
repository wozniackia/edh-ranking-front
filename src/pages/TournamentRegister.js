import "../styles/TournamentRegister.css";
import getDynamicBackground from "../dynamicBackgroundImage";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function TournamentRegister() {
  const [searchParams] = useSearchParams();
  const [tournament, setTournament] = useState({});
  const [backgroundStyle] = useState({ backgroundImage: `url(${getDynamicBackground()})` });

  useEffect(() => {
    fetch(
      `${
        process.env.REACT_APP_BACKEND_URI
      }/api/v1/tournament/${searchParams.get("tournamentId")}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTournament(data);
      })
      .catch((error) => console.log(error));
  }, [searchParams]);

  return (
    <div
      className="TournamentRegister"
      style={backgroundStyle}
    >
      <div className="TournamentRegisterForm">
        <h1>{tournament.tournamentName}</h1>
        <p className="tournamentData">{`Kiedy: ${new Date(
          tournament.tournamentDate
        ).toLocaleString("pl-PL")}`}</p>
        <p className="tournamentData">{`Gdzie: ${tournament.tournamentLocation}`}</p>
        <p className="tournamentData">{`Wpisowe: ${tournament.tournamentPrice} zł`}</p>
        <p className="tournamentData">{`Uczestnicy: ${
          tournament.registeredParticipants
            ? tournament.registeredParticipants.length
            : 0
        }/${tournament.availableParticipants}`}</p>
        <ShowRegisterButton searchParams={searchParams} />
      </div>
    </div>
  );
}

function ShowRegisterButton(searchParams) {
  const hasAccessToken = sessionStorage.getItem("access_token");
  const isAuthenticated = sessionStorage.getItem("authenticated") === 'true';
  if (hasAccessToken && isAuthenticated) {
    return <RegisterButton searchParams={searchParams} />;
  }
}

function RegisterButton(tournamentId) {
  return (
    <button
      className="mainButton"
      onClick={() => {
        registerForTournament(tournamentId)
      }}
    >
      Zapisz się na ten turniej
    </button>
  );
}

function registerForTournament(tournamentId) {
  fetch(
    `${
      process.env.REACT_APP_BACKEND_URI
    }/api/v1/tournament/${tournamentId}?playerUsername=${sessionStorage.getItem(
      "username"
    )}`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
      },
    }
  );
}

export default TournamentRegister;
