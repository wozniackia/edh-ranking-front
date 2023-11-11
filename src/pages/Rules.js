import '../styles/404.css';
import getDynamicBackground from '../dynamicBackgroundImage';

function Rules() {
  return (
    <div className='App' id='Home' style={{backgroundImage: `url(${getDynamicBackground()})`}}>
      <div className='hero-text'>Rules</div>
    </div>
  );
}

export default Rules;
