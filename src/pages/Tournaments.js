import '../styles/404.css';
import getDynamicBackground from '../dynamicBackgroundImage';

function Tournaments() {
  return (
    <div className='App' id='Home' style={{backgroundImage: `url(${getDynamicBackground()})`}}>
      <div className='hero-text'>Tournaments</div>
    </div>
  );
}

export default Tournaments;
