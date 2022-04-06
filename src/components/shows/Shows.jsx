import "./shows.css";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import { SingleShow } from "../singleshow/singleshow";
import { useState, useRef } from "react";

export const Shows = () => {
  const [postSlideNo, setPostSlideNo] = useState(false);
  const [isShowArrow, setIsShowArrow] = useState(0);
  const showRef = useRef();

  const arrowClick = (direction) => {
    setIsShowArrow(true);
    const distance = showRef.current.getBoundingClientRect().x - 30;
    if (direction === "arrow-left" && postSlideNo > 0) {
      setPostSlideNo(postSlideNo - 1);
      showRef.current.style.transform = `translateX(${320 + distance}px)`;
    }
    if (direction === "arrow-right" && postSlideNo < 2) {
      setPostSlideNo(postSlideNo + 1);
      showRef.current.style.transform = `translateX(${-320 + distance}px)`;
    }
  };

  return (
    <div className="menu">
      <span>Our Shows</span>
      <div className="wrapper">
        <ArrowBackIosRoundedIcon
          className="arrow-left"
          style={{ display: !isShowArrow && "none" }}
          onClick={() => {
            arrowClick("arrow-left");
          }}
        />
        <div className="shows" ref={showRef}>
          <SingleShow />
          <SingleShow />
          <SingleShow />
          <SingleShow />
          <SingleShow />
          <SingleShow />
        </div>
        <ArrowForwardIosRoundedIcon
          className="arrow-right"
          onClick={() => {
            arrowClick("arrow-right");
          }}
        />
      </div>
    </div>
  );
};
