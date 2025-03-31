import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";

const Logo = () => {
  return (
    <>
      <Image src={logo} alt="LOGO" priority/>
      NextLevel Food
    </>
  );
};

export default Logo;
