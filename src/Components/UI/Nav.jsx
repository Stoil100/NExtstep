import React from "react";

import styles from "./Nav.module.css";

const Nav = (props) => {
  return (
    <nav>
      <ul className={styles.navBar}>
        <li className={styles.navItems}>
          <a>Home</a>
          <a>News</a>
          <a>Account</a>
        </li>
        <li>
          <h2>NEXTSTEP</h2>
        </li>
        <li>
          n 
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
