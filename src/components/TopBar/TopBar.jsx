import { useState } from "react";
import "./topbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AllStories } from "../Pages/AllStories/AllStories";

export const TopBar = () => {
  // set the top bar to black when scrolling
  const [isTopColor, setIsTopBarColor] = useState(false);
  window.onscroll = () => {
    setIsTopBarColor(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isTopColor ? "topBarScroll" : "topBar"}>
      <div className="topBarLeft">
        <i className="topIcon fas fa-igloo"></i>
      </div>

      <div className="topBarRight">
        <ul className="topBarList">
          <li className="topBarListItem">STORIES</li>
          <li className="topBarListItem">SHOWS</li>
          <li className="topBarListItem">ABOUT</li>
          <li className="topBarListItem">WRITE</li>
          <li className="topBarListItem">LOGIN</li>
          <li className="topBarListItem">LOGOUT</li>
        </ul>
      </div>
    </div>
  );
};
