import React from "react";
import { ContentC, ContentL, ContentR, Wrapper } from "./footer.style";

import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";
import RoomIcon from "@mui/icons-material/Room";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <ContentL>
        <div className="logo">
          <h1>NIKHIL</h1> &nbsp;
          <TipsAndUpdatesIcon fontSize="large" />
        </div>
        <p>
          Get Your Favourite Brand Clothes On Lowest Price Available In Market.
        </p>
        <div className="social">
          <div className="icon">
            <a
              href="https://www.linkedin.com/in/nikhil-verma-13a2691b8/"
              target="_blank"
              rel="noopener noreferrer">
              {" "}
              <LinkedInIcon fontSize="large" />{" "}
            </a>
          </div>
          <div className="icon">
            <a
              href="https://github.com/Nikhil2910-rvt"
              target="_blank"
              rel="noopener noreferrer">
              {" "}
              <GitHubIcon fontSize="large" />{" "}
            </a>
          </div>
        </div>
      </ContentL>
      <ContentC>
        <h2>Useful Links</h2>
        <div className="links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
          <Link to="/products/men">
            <li>Man Fashion</li>
          </Link>
          <Link to="/products/women">
            <li>Woman Fashion</li>
          </Link>
        </div>
      </ContentC>
      <ContentR>
        <h2>Contact</h2>
        <p>
          {" "}
          <RoomIcon />
          &nbsp;Autar Nagar Colony, Ayodhya UttarPradesh-224135
        </p>
        <p>
          {" "}
          <PhoneIcon />
          &nbsp;+91 7665xxxxxx
        </p>
        <p>
          {" "}
          <MailOutlineIcon />
          &nbsp;nikhil.mymail1@gmail.com
        </p>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payment" />
      </ContentR>
    </Wrapper>
  );
};

export default Footer;
