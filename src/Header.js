import React from "react";
import { GoSearch } from "react-icons/go";
import {
  FaBell,
  FaCaretDown,
  FaFacebook,
  FaFontAwesomeFlag,
  FaGamepad,
  FaHome,
  FaPlus,
  FaUsers,
  FaVideo,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <div className="hleft">
        <div className="hleftlogo">
          <FaFacebook className="hlogo" />
        </div>
        <div className="hsearch">
          <input type="text" placeholder="Search" className="hbar" />
          <GoSearch className="hicon" />
        </div>
      </div>
      <div className="hcenter">
        <span className="cIcon">
          <FaHome className="hicons" />
          <span className="hnotify">20</span>
        </span>

        <span className="cIcon">
          <FaFontAwesomeFlag className="hicons" />
          <span className="hnotify">20</span>
        </span>

        <span className="cIcon">
          <FaVideo className="hicons" />
          <span className="hnotify">20</span>
        </span>

        <span className="cIcon">
          <FaUsers className="hicons" />
          <span className="hnotify">20</span>
        </span>

        <span className="cIcon">
          <FaGamepad className="hicons" />
          <span className="hnotify">20</span>
        </span>
      </div>
      <div className="hlast">
        <span className="hlastpart">
          <FaPlus />
        </span>
        <span className="hlastpart">
          <FaBell />
        </span>
        <span className="hlastpart">
          <FaCaretDown />
        </span>
      </div>
    </div>
  );
};
export default Header;
