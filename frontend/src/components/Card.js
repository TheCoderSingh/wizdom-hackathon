import React from "react";
import "../css/card.scss";
import { useNavigate } from "react-router-dom";
import Find from "../pages/Find";
const Card = ({ industry }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate({ Find });
  };
  return <div className="card">{industry}</div>;
};

export default Card;
