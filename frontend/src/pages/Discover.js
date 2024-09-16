import React from "react";
import Card from "../components/Card";
import "../css/discover.scss";
import Logo from "../assets/wLogo.svg";
import Bell from "../assets/bell.png";
const Discover = () => {
  const industries = [
    "Software Development and IT Services",
    "Video Game",
    "Film and VFX",
    "Telecommunications",
    "Biotechnology and Health Tech",
    "E-commerce",
    "Retail Technology",
    "Fintech",
    "Clean Tech and Sustainability",
    "AI and Machine Learning",
  ];

  return (
    <div className="discover-page">
      <div className="discover-header">
        <img id="logo" src={Logo} alt="Wizdom Logo"></img>
        <img id="bell" src={Bell} alt="Bell Icon"></img>
      </div>
      <h1>Discover People</h1>
      <div className="industries-list">
        {industries.map((industry, index) => (
          <Card key={index} industry={industry} />
        ))}
      </div>
    </div>
  );
};
export default Discover;
