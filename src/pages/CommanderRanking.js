import { useState, useEffect } from "react";
import BackendUri from "../backend-helper";
import Commander from "../components/Commander";
import "../styles/Ranking.css";

function Ranking() {
  
  const [ranking, setRanking] = useState([]);

    useEffect(() => {
        fetch(`${BackendUri()}/api/v1/commander/top`)
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
          .map((commander, index) => (
            <Commander number={index+1} name={commander.cName} wins={commander.wins}/>
          ))
        }
      </ul>
    </div>
  );
}

export default Ranking;
