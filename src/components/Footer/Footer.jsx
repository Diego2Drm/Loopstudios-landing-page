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
      <img src={logo} alt="logo" />
      <LinkList />
      <div className="content-list">
        <ul>
          <li><a href="#"><img src={IconFacebook} alt="icon-facebook" /></a></li>
          <li><a href="#"><img src={IconTwitter} alt="icon-twitter" /></a></li>
          <li><a href="#"><img src={IconPinterest} alt="icon-pinterest" /></a></li>
          <li><a href="#"><img src={IconInstagram} alt="icon-instagram" /></a></li>
        </ul>
      </div>
      <p>
        © 2021 Loopstudios. All rights reserved.
      </p>
    </footer>
  )
}

export { Footer };