import '../styles/Home.css';
import { useState } from 'react';
import logo from '../lledh.png';
import background from '../images/Island.jpg'

function Home() {

  const [backgroundImage, setBackgroundImage] = useState('');

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

  setTimeout(() => {
    setBackgroundImage(getNewBackgroundImage())
  }, "10000");

  function getNewBackgroundImage() {
    let newImage = `url(${images[Object.keys(images)[ Object.keys(images).length * Math.random() << 0]]})`;
    while (newImage == backgroundImage) {
      newImage = `url(${images[Object.keys(images)[ Object.keys(images).length * Math.random() << 0]]})`;
    }
    return newImage;
  }
  

  return (
    <div className='App' id='Home' style={{backgroundImage: backgroundImage}}>
      <img src={logo} className="hero-image" alt="logo" />
    </div>
  );
}

export default Home;
