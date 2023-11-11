import '../styles/404.css';
import getDynamicBackground from '../dynamicBackgroundImage';

function Register() {
  return (
    <div className='App' id='Home' style={{backgroundImage: `url(${getDynamicBackground()})`}}>
      <div className='hero-text'>Register</div>
    </div>
  );
}

export default Register;
