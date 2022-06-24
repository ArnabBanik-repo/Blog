import "./topbar.css";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";
import { BsBookmarks } from "react-icons/bs";
import { CgMenuLeftAlt } from "react-icons/cg";
import { GoLocation } from "react-icons/go";
const Topbar = (props) => {
  const cls = props.isScrolled ? "topbar shadow" : "topbar";
  return (
    <div className={cls}>
      <div className="topbar__left">
        <div className="topbar__left-iconWrap">
          <BsFillSuitHeartFill className="topbar__left-icon" />
        </div>
        <div className="topbar__left-menuWrap">
          <div className="wrapper">
            <CgMenuLeftAlt className="topbar__left-menuIcon" />
            <p>MENU</p>
          </div>
        </div>
      </div>

      <div className="topbar__right">
        <div className="topbar__right-phone">
          <BsPhone className="topbar__right-icon" />
          <small>(+91) 898 342 6759</small>
        </div>
        <div className="topbar__right-location">
          <GoLocation className="topbar__right-icon" />
          <small>OUR LOCATIONS</small>
        </div>
        <div className="topbar__right-book">
          <BsBookmarks className="topbar__right-icon" />
          <small>BOOK NOW</small>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
