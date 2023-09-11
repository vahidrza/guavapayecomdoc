import React, { useEffect } from "react";
import "./nav.css";

function Nav() {

  //Function to Go targetted Component
  let scrollToComponent = (e, targetComponent) => {
    const element = document.getElementById(targetComponent);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    e.preventDefault();
  }

  useEffect(() => {
    //Get All List Items
    const listItems = document.getElementsByClassName("navListItem");

    //Walking on all list items
    for (let index = 0; index < listItems.length; index++) {

      //Removing class from other item
      listItems[index].lastElementChild.onclick = (e) => {
        //Removing the class from the before selected icon
        document.getElementsByClassName('icon')[0].classList.remove('icon');

        //Changing class for selected Nav item's icon
        e.target.parentElement.firstChild.classList.add('icon');

        //Removing class from before selected List Item
        for (let index = 0; index < listItems.length; index++) {
          listItems[index].classList.remove("active");
        }

        //Setting className on click the List item
        e.target.parentElement.classList.add("active");
      };
    }
  }, []);
  return (
    <div className="nav">
      <div className="logo">
        <a href="/" >
          <img
            src={`${process.env.PUBLIC_URL}/assets/img/logo.svg`}
            alt="logo"
          />
        </a>
      </div>

      <ul className="navList" id="navList">
        <li className="navListItem active">
          <span className="icon"></span>
          <a id="introductionNavItem" href=" " onClick={(e) => scrollToComponent(e, 'introduction')}>Introduction</a>
        </li>
        
        <li className="navListItem">
          <span></span>
          <a id="registerorderNavItem" href=" " onClick={(e) => scrollToComponent(e, 'registerorder')} >Order registration</a>
        </li><li className="navListItem">
          <span></span>
          <a id="testDetailsNavItem" href=" " onClick={(e) => scrollToComponent(e, 'testDetails')} >Test Details</a>
        </li>
        <li className="navListItem"><span></span>
          <a id="checkthreedsNavItem" href=" " onClick={(e) => scrollToComponent(e, 'checkthreeds')}>Check 3DS version</a>
        </li>
        <li className="navListItem"><span></span>
          <a id="paymentNavItem" href=" " onClick={(e) => scrollToComponent(e, 'payment')}>Payment</a>
        </li>
        <li className="navListItem"><span></span>
          <a id="refundNavItem" href=" " onClick={(e) => scrollToComponent(e, 'refund')}>Refund</a>
        </li>
        <li className="navListItem"><span></span>
          <a id="statusNavItem" href=" " onClick={(e) => scrollToComponent(e, 'status')}>Status check</a>
        </li>
        <li className="navListItem"><span></span>
          <a id="balanceNavItem" href=" " onClick={(e) => scrollToComponent(e, 'balance')}>Balance check</a>
        </li>
        <li className="navListItem"><span></span>
          <a id="notificationNavItem" href=" " onClick={(e) => scrollToComponent(e, 'notification')}>Notification service</a>
        </li>
        <li className="navListItem"><span></span>
          <a id="errorcodesNavItem" href=" " onClick={(e) => scrollToComponent(e, 'errorcodes')}>List of error codes</a>
        </li>
        <li className="navListItem"><span></span>
          <a id="fraudNavItem" href=" " onClick={(e) => scrollToComponent(e, 'fraud')}>Fraud rules</a>
        </li>
      </ul>

      <div className="border" >
        <a target="_blank" rel="noreferrer" href="https://github.com/GuavaPay/eCommerce-PHP-SDK" className="phpGithubRepo">
          PHP Examples
          <img src={`${process.env.PUBLIC_URL}/assets/img/githubLogo.svg`} alt="Github" />
        </a>
      </div>

    </div>
  );
}

export default Nav;