import React from "react";
import '../../scss/components/Footer.scss'
import logo from '../../assets/logo.svg'
import IconFacebook from "../../assets/icon-facebook.svg"
import IconInstagram from "../../assets/icon-instagram.svg"
import IconPinterest from "../../assets/icon-pinterest.svg"
import IconTwitter from "../../assets/icon-twitter.svg"
import { LinkList } from "../LinkList";

function Footer() {
  return (
    <footer>
      <div className="content-list">
        <img src={logo} alt="logo" />
        <LinkList />
      </div>
      <div className="content-list-socialMedia">
        <ul>
          <li><a href="#"><img src={IconFacebook} alt="icon-facebook" /></a></li>
          <li><a href="#"><img src={IconTwitter} alt="icon-twitter" /></a></li>
          <li><a href="#"><img src={IconPinterest} alt="icon-pinterest" /></a></li>
          <li><a href="#"><img src={IconInstagram} alt="icon-instagram" /></a></li>
        </ul>
        <p>
          © 2021 Loopstudios. All rights reserved.
        </p>
      </div>

    </footer>
  )
}

export { Footer };