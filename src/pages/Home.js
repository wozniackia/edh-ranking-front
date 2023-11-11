import '../styles/Home.css';
import getDynamicBackground from '../dynamicBackgroundImage';
import logo from '../lledh.png';

function Home() {

  return (
    <div className='App' id='Home' style={{backgroundImage: `url(${getDynamicBackground()})`}}>
      <img src={logo} className="hero-image" alt="logo" />
    </div>
  );
}

export default Home;
