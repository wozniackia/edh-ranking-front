import { useState, useEffect } from "react";
import Commander from "../components/Commander";
import "../styles/Ranking.css";

function Ranking() {
  
  const [ranking, setRanking] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URI}/api/v1/commander/top?limit=10`)
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
            <Commander number={index+1} name={commander.cName} wins={commander.wins} matches={commander.matches} key={commander.id}/>
          ))
        }
      </ul>
    </div>
  );
}

export default Ranking;
