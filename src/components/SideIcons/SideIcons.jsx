import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsFillShareFill } from "react-icons/bs";
import "./sideicons.css";
const SideIcons = () => {
  return (
    <div className="sideicons">
      <div className="icon">
        <FaFacebookF />
      </div>
      <div className="icon">
        <BsTwitter />
      </div>
      <div className="icon">
        <BsFillShareFill />
      </div>
    </div>
  );
};

export default SideIcons;
