import '../styles/Ranking.css';
import { Inflection, ClassForNumber } from "../rankingHelper";

function Player({ number, name, wins, matches }) {
  return (
    <li key={number} className="ranking-item">
          <div className={`${ClassForNumber(number)}`}>{number}</div>
          <div className="name">{name}</div>
          <div className="wins">{`${wins} ${Inflection(wins)} (${Math.round((100*wins/matches))}%)`}</div>
        </li>
  );
}

export default Player;
