import React from "react";
import level from '../../../assets/Home/shape-bg.png'
import "./Footer.css";

export default function footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
         <img src={level}alt='no internet connection' /> 
      </div>
    </div>
  );
}
