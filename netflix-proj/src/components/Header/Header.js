import React from "react";
import "./header.css";
import NetflixLogo from "../../assates/images/NetflixLogo.png";
import YoutubeSearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const Header = () => {
  return (
    <>
      <div className="header-outer-container">
        <div className="header-container">
          <div className="header-left">
            <ul>
              <li>
                <img src={NetflixLogo} alt="Netflix Logo" width="100" />
              </li>
              <li>Home</li>
              <li>TVShows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>Mylist</li>
              <li>Browse by languages</li>
            </ul>
          </div>
          <div className="headerRight">
            <ul>
              <li>
                <YoutubeSearchedForIcon />
              </li>
              <li>
                <NotificationsNoneIcon />
              </li>
              <li>
                <AccountBoxIcon />
              </li>
              <li>
                <ArrowDownwardIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
