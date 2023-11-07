import '../styles/Ranking.css';

function Commander({ number, name, wins }) {
  return (
    <li className="ranking-item">
          <div className="number">{number}</div>
          <div className="name">{name}</div>
          <div className="wins">{wins}</div>
        </li>
  );
}

export default Commander;
