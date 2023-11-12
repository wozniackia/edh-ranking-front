import "../styles/Tournaments.css";
import getDynamicBackground from "../dynamicBackgroundImage";
import ScheduleItem from "../components/ScheduleItem";
import { useState, useEffect } from "react";

function Tournaments() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URI}/api/v1/tournament/last`)
      .then((response) => response.json())
      .then((data) => {
        setTournaments(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      className="TournamentsMain Main"
      id="Home"
      style={{ backgroundImage: `url(${getDynamicBackground()})` }}
    >
      <div className="TournamentsLeft">
        <ul>
        {tournaments
          .map((tournament, index) => (
            <ScheduleItem
            key={index}
            Date={`${new Date(tournament.tournamentDate).toLocaleString('pl-PL', { timeZone: 'UTC' })}`}
            Name={tournament.tournamentName}
            Location={tournament.tournamentLocation}
            Price={`${tournament.tournamentPrice} zł`}
            CurrentParticipants={tournament.registeredParticipants ? tournament.registeredParticipants.length : 0}
            AllParticipants={tournament.availableParticipants}
            />
          ))}
        </ul>
      </div>
      <div className="TournamentsRight">
        <div className="Title">Dodatkowe informacje o turniejach:</div>
        <div className="Info">
          <div className="InfoElement">
            Turnieje rozgrywane są w formacie EDH (Elder Dragon Highlander,
            znane też jako Commander)
          </div>
          <div className="InfoElement">
            Kwota wpisowego na turnieje ustalane indywidualnie dla każdego
            wydarzenia
          </div>
          <div className="InfoElement">
            Nagrody przyznawane są najlepszym 3 graczom turnieju
          </div>
          <div className="InfoElement">Turnieje odbywają raz w tygodniu</div>
          <div className="InfoElement">
            Aktualizacje i powiadomienia o nadchodzących turniejach publikowane
            są na stronie internetowej i mediach społecznościowych
          </div>
          <div className="InfoElement">
            Zachęcamy do regularnego sprawdzania harmonogramu, aby być na
            bieżąco z nadchodzącymi turniejami i wydarzeniami społecznościowymi!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tournaments;
