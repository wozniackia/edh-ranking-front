import '../styles/404.css';
import getDynamicBackground from '../dynamicBackgroundImage';
import { useState } from 'react';

function Element404() {
  const [backgroundStyle] = useState({ backgroundImage: `url(${getDynamicBackground()})` });

  return (
    <div className='App' id='Home' style={backgroundStyle}>
      <div className='hero-text'>404</div>
    </div>
  );
}

export default Element404;
