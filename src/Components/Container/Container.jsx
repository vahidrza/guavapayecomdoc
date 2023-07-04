import React, { useEffect } from "react";
import "./container.css";
import Nav from "./Nav/Nav";
import Main from "./Main/Main";

function Container() {
  useEffect(() => {
    let components = document.getElementById("main").childNodes;
    let listItems = document.getElementsByClassName("navListItem");

    for (let index = 0; index < 10; index++) {
      components[index].onmouseover = () => {
        listItems[index].style.backgroundColor = "#D6EAE5";
        document.getElementById("goToTheTopAnchor").style.color =
          index === 0 ? "#FFF" : "#0B9A78";
      };
      components[index].onmouseout = () => {
        listItems[index].style.backgroundColor = "#FFF";
      };
      listItems[index].onmouseover = () => {
        listItems[index].style.backgroundColor = "#D6EAE5";
      };
      listItems[index].onmouseout = () => {
        listItems[index].style.backgroundColor = "#FFF";
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
