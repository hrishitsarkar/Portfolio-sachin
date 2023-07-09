import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

function Nav() {
  const [activeNow, setActiveNow] = useState("#");

  return (
    <nav>
      <a href="#" className={activeNow === "#" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNow("#about")}
        className={activeNow === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNow("#skills")}
        className={activeNow === "#skills" ? "active" : ""}
      >
        <RiServiceLine />
      </a>

      <a
        href="#experience"
        onClick={() => setActiveNow("#experience")}
        className={activeNow === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNow("#contact")}
        className={activeNow === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;
