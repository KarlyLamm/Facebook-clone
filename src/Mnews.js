import React from "react";

const Mnews = () => {
  const [s, setState] = React.useState([
    {
      id: 1,
      userImg: "../img/stockphoto4.jpeg",
      name: "Jimmy John",
      time: "1h",
      text: "This is a sample",
      postImg: "../img/stockphoto6.jpeg",
    },
    {
      id: 2,
      userImg: "../img/stockphoto3.jpeg",
      name: "John Jimmy",
      time: "2h",
      text: "This is also sample",
      postImg: "../img/stockphoto2.jpeg",
    },
  ]);
  return (
    <div className="news">
      {s.map((post) => (
        <div key={post.id} className="empty">
          <div className="newsheader">
            <div className="newsheaderimg">
              <img src={post.userImg} />
            </div>
            <div className="newsheadername">
              {post.name}
              <div className="date">{post.time}</div>
            </div>
          </div>
          <div className="newsbody">
            <div className="newsbodytext">
              {post.text}
              <div className="newbodyimg">
                <img src={post.postImg} />
              </div>
            </div>
          </div>
          <div className="newsr">
            <span className="r"></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mnews;
