import "../styles/Tournaments.css";
import getDynamicBackground from "../dynamicBackgroundImage";
import ScheduleItem from "../components/ScheduleItem";

function Tournaments() {
  return (
    <div
      className="TournamentsMain Main"
      id="Home"
      style={{ backgroundImage: `url(${getDynamicBackground()})` }}
    >
      <div className="TournamentsLeft">
        <ul>
          <ScheduleItem
            Date={"01.01"}
            Name={"1 Turniej Lubelskiej Ligi EDH"}
            Location={"Chatka Żaka"}
            Price={"10 PLN"}
            CurrentParticipants={"0"}
            AllParticipants={"10"}
          />
          <ScheduleItem
            Date={"02.02"}
            Name={"2 Turniej Lubelskiej Ligi EDH"}
            Location={"Chatka Żaka"}
            Price={"10 PLN"}
            CurrentParticipants={"0"}
            AllParticipants={"10"}
          />
        </ul>
      </div>
      <div className="TournamentsRight">
        <div className="Title">
          Dodatkowe informacje o turniejach:
        </div>
        <div className="Info">
          <div className="InfoElement">
            Turnieje rozgrywane są w formacie EDH (Elder Dragon Highlander, znane też jako Commander)
          </div>
          <div className="InfoElement">
            Kwota wpisowego na turnieje ustalane indywidualnie dla każdego wydarzenia
          </div>
          <div className="InfoElement">
            Wpisowe funduje nagrody dla zwycięzców graczy
          </div>
          <div className="InfoElement">
            Nagrody przyznawane są najlepszym 3 graczom turnieju
          </div>
          <div className="InfoElement">
            Turnieje odbywają raz w tygodniu
          </div>
          <div className="InfoElement">
            Aktualizacje i powiadomienia o nadchodzących turniejach publikowane są na stronie internetowej i mediach społecznościowych
          </div>
          <div className="InfoElement">
            Zachęcamy do regularnego sprawdzania harmonogramu, aby być na bieżąco z nadchodzącymi turniejami i wydarzeniami społecznościowymi!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tournaments;
