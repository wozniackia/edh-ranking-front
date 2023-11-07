import Player from "../components/Player";
import "../styles/Ranking.css";

function Ranking() {
  const ranking = [
    {name: "Antoni Woźniacki",wins: "1"},
    {name: "Kuba Buba",wins: "11"},
    {name: "Dzonson",wins: "9000"},
    {name: "Jakub Karpiński",wins: "10"}
];

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
            <Player number={index+1} name={person.name} wins={person.wins}/>
          ))
        }
      </ul>
    </div>
  );
}

export default Ranking;
