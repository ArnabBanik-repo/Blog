import HeaderBg from "../../assets/images/header-bg.jpg";
import { MdCardTravel } from "react-icons/md";
import Me from "../../assets/images/me.jpg";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header__bg">Latest</div>
      <p className="header__sideText">The Latest</p>
      <div className="container header__container">
        <div className="header__content">
          <MdCardTravel className="header__icon" />
          <h1>The essential guide to Liverpool</h1>
          <p>CITY LIFE | 6 MIN READ</p>
        </div>
        <div className="header__image">
          <img src={HeaderBg} alt="" />
        </div>
        <div className="author">
          <div className="author-image">
            <img src={Me} alt="" />
          </div>
          <div className="author-content">
            <p>JOHN DOE | MARKETING MANAGER</p>
            <a href="">@JOHN_DOE</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
