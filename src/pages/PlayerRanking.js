import { useState, useEffect } from "react";
import BackendUri from "../backend-helper";
import Player from "../components/Player";
import "../styles/Ranking.css";

function Ranking() {

  const [ranking, setRanking] = useState([]);

    useEffect(() => {
        fetch(`${BackendUri()}/api/v1/player/top`)
          .then((response) => response.json())
          .then((data) => {
            setRanking(data)
          })
          .catch((error) => console.log(error));
      }, []);

  return (
    <div className="ranking">
      <ul className="ranking-list">
        { 
          ranking.sort((a, b) => {
            if (a.wins > b.wins) {
              return -1;
            } else if (a.wins < b.wins) {
              return 1;
            } else {
              return 0;
            }
          })
          .map((person, index) => (
            <Player number={index+1} name={`${person.firstName} ${person.lastName}`} wins={person.wins}/>
          ))
        }
      </ul>
    </div>
  );
}

export default Ranking;
