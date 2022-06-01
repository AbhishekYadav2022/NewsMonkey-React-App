import React, { Component } from "react";
import "../components/Navbar.css";
export class Navbar extends Component {
  render() {
    return (
      <>
        <nav>
          <a href="/">NewsMonkey</a>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
