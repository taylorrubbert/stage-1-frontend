import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/images/pokeball.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__title-container">
          <Link to="/">
            <img src={logo} className="header__logo" alt="PokeCompare Logo" />
          </Link>
          <h1 className="header__title">PokeCompare</h1>
        </div>
        <div className="header__links">
          <Link to="/news" className="header__link">
            Latest News
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
