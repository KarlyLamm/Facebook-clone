import React from "react";
import { GrFacebook } from "react-icons/gr";

const Header = () => {
  return (
    <div className="App">
      <div className="hleft">
        <div className="hleftlogo">
          <GrFacebook className="hlogo" />
        </div>
      </div>
      <div className="hcenter"></div>
      <div className="hlast"></div>
    </div>
  );
};
export default Header;
