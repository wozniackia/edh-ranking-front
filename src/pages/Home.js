import "../styles/Home.css";
import getDynamicBackground from "../dynamicBackgroundImage";
import logo from "../lledh.png";

function Home() {
  return (
    <div>
      <div
        className="Hero"
        id="Home"
        style={{ backgroundImage: `url(${getDynamicBackground()})` }}
      >
        <img src={logo} className="hero-image" alt="logo" />
      </div>
      <div
        className="Main"
      >
        <p>
        Najblizszy turniej: TBD
        </p>
        <p className="Footer">
        Lubelska Liga Commandera is unofficial Fan Content permitted under the Fan Content Policy. Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast. ©Wizards of the Coast LLC.
        </p>
      </div>
    </div>
  );
}

export default Home;
