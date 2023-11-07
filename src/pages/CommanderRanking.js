import Commander from "../components/Commander";
import "../styles/Ranking.css";

function Ranking() {
  const ranking = [
    {name: "Krenko",wins: "9000"},
    {name: "Twincaster obsraniec",wins: "0"},
    {name: "Ghyrson kox",wins: "12"},
    {name: "Bilbo baggins",wins: "10"}
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
            <Commander number={index+1} name={person.name} wins={person.wins}/>
          ))
        }
      </ul>
    </div>
  );
}

export default Ranking;
