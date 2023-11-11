import '../styles/Home.css';
import logo from '../lledh.png';

function Home() {

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className='App' id='Home' style={{backgroundImage: `url(${images[Object.keys(images)[ Object.keys(images).length * Math.random() << 0]]})`}}>
      <img src={logo} className="hero-image" alt="logo" />
    </div>
  );
}

export default Home;
