import '../styles/Hero.css';
import logo from '../lledh.png';

function Hero() {
  return (
    <div className='hero'>
        <img src={logo} className="hero-image" alt="logo" />
    </div>
  );
}

export default Hero;
