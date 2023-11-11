import '../styles/404.css';
import getDynamicBackground from '../dynamicBackgroundImage';

function Element404() {
  return (
    <div className='App' id='Home' style={{backgroundImage: `url(${getDynamicBackground()})`}}>
      <div className='hero-text'>404</div>
    </div>
  );
}

export default Element404;
