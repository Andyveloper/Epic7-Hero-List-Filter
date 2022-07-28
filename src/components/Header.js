import Ras from '../assets/images/Ras-e7.png';
import Logo from '../assets/images/e7-logo.png';
import myVideo from '../assets/video/e7intro.mp4';

const Header = () => (
  <>
    <nav className="navbar">
      <div className="navbar__items">
        <span>
          <i className="fa-solid fa-chevron-left" />
          {' '}
          2015
        </span>
        <p>Most Views</p>
        <div className="navbar__items__icons">
          <i className="fa-solid fa-microphone" />
          <i className="fa-solid fa-gear" />
        </div>
      </div>
    </nav>
    <header className="header">
      <div className="video-container">
        <video autoPlay muted loop id="video">
          <source src={myVideo} type="video/mp4" />
        </video>
      </div>
      <div className="header__container">
        <img className="header__container__icon" src={Ras} alt="Epic Seven Hero" />
        <div className="header__container__logo">
          <img src={Logo} alt="Epic seven logo" />
        </div>
      </div>
    </header>
    <div className="header__description">
      <p>HEROES BY ELEMENT</p>
    </div>
  </>
);
export default Header;
