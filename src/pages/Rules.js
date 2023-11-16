import '../styles/404.css';
import getDynamicBackground from '../dynamicBackgroundImage';
import { useState } from 'react';

function Rules() {
  const [backgroundStyle] = useState({ backgroundImage: `url(${getDynamicBackground()})` });

  return (
    <div className='App' id='Home' style={backgroundStyle}>
      <div className='hero-text'>Rules</div>
    </div>
  );
}

export default Rules;
