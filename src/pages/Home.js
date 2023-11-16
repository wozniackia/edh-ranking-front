import "../styles/Home.css";
import getDynamicBackground from "../dynamicBackgroundImage";
import logo from "../lledh.png";
import { useState, useEffect } from "react";

function Home() {

  const [tournament, setTournament] = useState([{tournamentDate: 'TBA'}]);
  const [backgroundStyle] = useState({ backgroundImage: `url(${getDynamicBackground()})` });

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URI}/api/v1/tournament/last?limit=1`)
      .then((response) => response.json())
      .then((data) => {
        if(data.length === 0) {
          setTournament([{tournamentDate: 'TBA'}])
        } else {
          setTournament(data);
        }
      })
      .catch((error) => console.log(error));
  }, [backgroundStyle]);

  return (
    <div>
      <div
        className="Hero"
        id="Home"
        style={backgroundStyle}
      >
        <img src={logo} className="hero-image" alt="logo" />
      </div>
      <div
        className="Main"
      >
        <p>
        Najblizszy turniej: {tournament[0].tournamentDate === 'TBA' ? 'TBA' : new Date(tournament[0].tournamentDate).toLocaleString('pl-PL')}
        </p>
        <p className="Footer">
        Lubelska Liga Commandera is unofficial Fan Content permitted under the Fan Content Policy. Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast. ©Wizards of the Coast LLC.
        </p>
      </div>
    </div>
  );
}

export default Home;
