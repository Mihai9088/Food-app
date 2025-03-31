import Link from "next/link";
import React from "react";
import Logo from "../../logo";
import classes from "./main-header.module.css";
import MainHeaderBackground from "../main-header-background/main-header-background";
import NavLink from "../nav-link";

const MainHeader = () => {

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Logo />
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
             <NavLink  href='/meals'>Meals</NavLink>
            </li>
            <li>
            <NavLink href='/community'>Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
