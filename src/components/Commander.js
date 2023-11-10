import "../styles/Ranking.css";
import { Inflection, ClassForNumber } from "../rankingHelper";

function Commander({ number, name, url, wins, matches }) {
  return (
    <li key={number} className="ranking-item">
      <div className={`${ClassForNumber(number)}`}>{number}</div>
      <div className="name">{name}</div>
      <img src={url} alt="card face preview" className="cardpreview" />
      <div className="wins">{`${wins} ${Inflection(wins)} (${Math.round(
        (100 * wins) / matches
      )}%)`}</div>
    </li>
  );
}

export default Commander;
