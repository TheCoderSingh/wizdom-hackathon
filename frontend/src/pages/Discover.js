import React from "react";
import Card from "../components/Card";
import "../css/discover.scss";

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
