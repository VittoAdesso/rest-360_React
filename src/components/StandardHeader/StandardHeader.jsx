import React from "react";
import "./styles.scss";


const StandardHeader = (props) => {
  return (
    <div
      className="photoHeader"
      style={{
        backgroundImage: `url(${props.bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default StandardHeader;
