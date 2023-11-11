import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faRankingStar, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import '../styles/Nav.css';

function Nav() {
  return (
    <header>
      <nav className='navbar'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a href='/' className='nav-link'>
              <FontAwesomeIcon icon={faHouse} />
              <span className='link-text'>Strona główna</span>
            </a>
          </li>
          {/* <li className='nav-item'>
            <a href='/tournaments' className='nav-link'>
              <FontAwesomeIcon icon={faTrophy} />
              <span className='link-text'>Turnieje</span>
            </a>
          </li>
          <li className='nav-item'>
            <a href='/rules' className='nav-link'>
              <FontAwesomeIcon icon={faBook} />
              <span className='link-text'>Regulamin</span>
            </a>
          </li> */}
          <li className='nav-item'>
            <a href='/ranking' className='nav-link'>
              <FontAwesomeIcon icon={faRankingStar} />
              <span className='link-text'>Ranking</span>
            </a>
          </li>
          {/* <li className='nav-item'>
            <a href='/register' className='nav-link'>
              <FontAwesomeIcon icon={faPenToSquare} />
              <span className='link-text'>Zapisy na turniej</span>
            </a>
          </li> */}
          <li className='nav-item'>
            <a href='/about-us' className='nav-link'>
              <FontAwesomeIcon icon={faCircleInfo} />
              <span className='link-text'>O nas</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
