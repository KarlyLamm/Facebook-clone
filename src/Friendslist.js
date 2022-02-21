import React from "react";

const Friendslist = () => {
  const [state, setState] = React.useState([
    { id: 1, img: "../img/stockphoto1.jpeg", name: "Steve" },
    { id: 2, img: "../img/stockphoto2.jpeg", name: "Sam" },
    { id: 3, img: "../img/stockphoto3.jpeg", name: "Danny" },
    { id: 4, img: "../img/stockphoto4.jpeg", name: "Sandy" },
    { id: 5, img: "../img/stockphoto5.jpeg", name: "Greg" },
    { id: 6, img: "../img/stockphoto6.jpeg", name: "Lindsay" },
  ]);
  return (
    <div className="friend">
      {state.map((f) => (
        <div className="friendlist" key={f.id}>
          <div className="friendlistimg">
            <img src={f.img} />
            <span className="s"></span>
          </div>
          <div className="friendlistname">{f.name}</div>
        </div>
      ))}
    </div>
  );
};
export default Friendslist;
