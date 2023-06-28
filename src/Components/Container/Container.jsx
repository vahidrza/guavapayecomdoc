import React, { useEffect } from "react";
import "./container.css";
import Nav from "./Nav/Nav";
import Main from "./Main/Main";

function Container() {
  useEffect(() => {
    for (let index = 0; index < 10; index++) {
      document.getElementById("main").childNodes[index].onmouseover = () => {
        document.getElementsByClassName("navListItem")[
          index
        ].style.backgroundColor = "#D6EAE5";
      };
      document.getElementById("main").childNodes[index].onmouseout = () => {
        document.getElementsByClassName("navListItem")[
          index
        ].style.backgroundColor = "#FFF";
      };
    }
  }, []);

  return (
    <div className="container">
      <Nav />
      <Main />
    </div>
  );
}

export default Container;
