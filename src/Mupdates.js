import React from "react";

const Mupdates = () => {
  const [s, setState] = React.useState([
    { id: 3, img: "../img/stockphoto3.jpeg", name: "stock 3" },
    { id: 4, img: "../img/stockphoto4.jpeg", name: "stock 4" },
    { id: 5, img: "../img/stockphoto5.jpeg", name: "stock 5" },
    { id: 6, img: "../img/stockphoto6.jpeg", name: "stock 6" },
  ]);
  return (
    <div className="updates">
      {s.map((up) => (
        <div className="updatesc" key={up.id}>
          <div className="updatesb">
            <img src={up.img} />
            <div className="updatesbo">
              <div className="updatesboimg">
                <img src={up.img} />
              </div>
              <div className="updatesboname">{up.name}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mupdates;
