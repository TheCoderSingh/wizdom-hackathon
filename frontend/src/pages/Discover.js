import React from "react";

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
          <div key={index} className="industry-card">
            <h2>{industry}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Discover;
