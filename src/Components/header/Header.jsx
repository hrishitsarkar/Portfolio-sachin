import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/self-pictures/1.jpg";
import HeaderSocials from "./HeaderSocials";
function Header() {
  return (
    <header>
      <div className="container header__container">
        <h1>Hello MySelf Sachin</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
