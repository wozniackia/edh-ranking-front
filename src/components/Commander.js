import '../styles/Ranking.css';
import inflection from '../helper';

function Commander({ number, name, wins, matches}) {
  return (
    <li key={number} className="ranking-item">
          <div className="number">{number}</div>
          <div className="name">{name}</div>
          <div className="wins">{`${wins} ${inflection(wins)} (${Math.round((100*wins/matches))}%)`}</div>
        </li>
  );
}

export default Commander;
