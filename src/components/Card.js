import React from "react";

const Card = ({
  id,
  number,
  rank,
  name,
  type,
  risk,
  availability,
  monthlyPerformance,
  annualPerformance,
}) => {
  return (
    <div className="bg-white dib br3 pad3 ma2 grow bw2 shadow-5">
      <div className="b pa2">
        <h1 className="tc">{id}</h1>
        <p>Rank: <span className="normal">{rank}</span></p>
        <p>Name: <span className="normal">{name}</span></p>
        <p>Type: <span className="normal">{type}</span></p>
        <p>Risk Level: <span className="normal">{risk}</span></p>
        <p>Availability: <span className="normal">{availability} Months</span></p>
        <p>Monthly Performance: <span className="normal">{monthlyPerformance*100}%</span></p>
        <p>Annual Performance: <span className="normal">{annualPerformance*100}%</span></p>
      </div>
    </div>
  );
};

export default Card;
