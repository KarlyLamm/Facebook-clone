import React from "react";
import { FaFileImage, FaRegGrinAlt, FaVideo } from "react-icons/fa";

const Status = () => {
  return (
    <div className="status">
      <div className="statusf">
        <div className="statusfimg">
          <span>
            <img src="../img/stockphoto1.jpeg" />
          </span>
        </div>
        <div className="statusfinput">
          <input
            type="text"
            className="statusfin"
            placeholder="Put your thoughts here"
          />
        </div>
      </div>
      <div className="statusse">
        <span className="statusicon">
          <FaVideo className="live" />
          <span className="text">Live</span>
        </span>

        <span className="statusicon">
          <FaFileImage className="photo" />
          <span className="text">Photos</span>
        </span>
        <span className="statusicon">
          <FaRegGrinAlt className="feeling" />
          <span className="text">Feeling</span>
        </span>
      </div>
    </div>
  );
};
export default Status;
