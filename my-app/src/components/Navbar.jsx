import React from "react";

const imgStyle = {
  height: "10vh",
  objectFit: "contain",
  paddingLeft: "10px"
}

function Navbar() {

    return (
      <div className="navbar">
        <img style={imgStyle} src="./images/logo.png" alt="Logo" />
        <img style={imgStyle} src="./images/option.png" alt="options/features" />
        <img style={imgStyle} src="./images/user.png" alt="User Account" />
      </div>
    );
}

export default Navbar;