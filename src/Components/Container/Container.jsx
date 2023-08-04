import React, { useEffect } from "react";
import "./container.css";
import Nav from "./Nav/Nav";
import Main from "./Main/Main";
import NoDesktop from "./NoDesktop/NoDesktop";

function Container() {

  const mediaQuery = window.matchMedia('(min-width:1200px)');
  function applyCustomStyles(mql) {
    if (mql.matches) {
      return <>
        <Nav />
        <Main />
      </>
    } else {
      return <NoDesktop/>
    }
  }

  useEffect(() => {
    applyCustomStyles(mediaQuery);
      mediaQuery.addListener(applyCustomStyles);
  });
  
  return (
    <div className="container">
      {/* <Nav />
      <Main /> */}
      {applyCustomStyles(mediaQuery)}
    </div>
  );
}

export default Container;
