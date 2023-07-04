import "./header.css";
import React /*, { useEffect } */ from "react";

function Header() {
  // useEffect(() => {
  //   if (localStorage.getItem("lang") === null)
  //     localStorage.setItem("lang", "en");
  //   else;
  //   document
  //     .getElementById(localStorage.getItem("lang"))
  //     .classList.add("active");
  // }, []);

  // let languageSetting = (lang1, lang2) => {
  //   localStorage.setItem("lang", lang1);
  //   document.getElementById(lang1).classList.add("active");
  //   document.getElementById(lang2).classList.remove("active");
  // };

  return (
    <div id="header" className="header">
      <div className="headerLogo">
        <a href="# ">
          <img src="https://apidocs.guavapay.com/images/logo2.jpg" alt="" />
        </a>
      </div>

      <div className="headerInfo">
        <h1 className="headerInfoHeading">
          E-commerce Payment Gateway API Specification
        </h1>
      </div>

      {/* <div className="headerChanges">
        <div className="headerChangesLanguage">
          <div
            onClick={() => languageSetting("en", "ru")}
            id="en"
            className="headerChangesLanguageOption"
          >
            EN
          </div>
          <div
            onClick={() => languageSetting("ru", "en")}
            id="ru"
            className="headerChangesLanguageOption"
          >
            RU
          </div>
        </div>

        <div className="headerChangesPageMode">
          <div className="headerChangesPageModeElement">Lite</div>

          <div className="headerChangesPageModeElement">Dark</div>
        </div>
      </div> */}
    </div>
  );
}

export default Header;
