import '../styles/Ranking.css';

function Player({ number, name, wins }) {
  return (
    <li key={number} className="ranking-item">
          <div className="number">{number}</div>
          <div className="name">{name}</div>
          <div className="wins">{wins}</div>
        </li>
  );
}

export default Player;
