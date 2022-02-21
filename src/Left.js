import React from "react";

const Left = () => {
  const [lg, setState] = React.useState([
    { id: 1, img: "../img/stockphoto1.jpeg", name: "stock 1" },
    { id: 2, img: "../img/stockphoto2.jpeg", name: "stock 2" },
    { id: 3, img: "../img/stockphoto3.jpeg", name: "stock 3" },
    { id: 4, img: "../img/stockphoto4.jpeg", name: "stock 4" },
    { id: 5, img: "../img/stockphoto5.jpeg", name: "stock 5" },
    { id: 6, img: "../img/stockphoto6.jpeg", name: "stock 6" },
  ]);
  return (
    <div className="left">
      {lg.map((i) => (
        <div className="leftl" key={i.id}>
          <div className="leftimg">
            <img src={i.img} />
          </div>
          <div className="leftlname">{i.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Left;
