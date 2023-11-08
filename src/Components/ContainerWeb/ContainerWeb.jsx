import React, { useEffect } from "react";
import "./containerWeb.css";
import NavWeb from "./NavWeb/NavWeb";
import MainWeb from "./MainWeb/MainWeb";
import NoDesktop from "./NoDesktop/NoDesktop";

function ContainerWeb() {

  const mediaQuery = window.matchMedia('(min-width:1200px)');
  function applyCustomStyles(mql) {
    if (mql.matches) {
      return <>
        <NavWeb />
        <MainWeb />
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

export default ContainerWeb;
