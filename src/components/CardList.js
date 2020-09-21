import React from "react";
import Card from "./Card";

const CardList = ({ funds }) => {
  return (
    <div>
      {
        funds.map((user, i) => {
          return (
            <Card
              key={funds[i].id}
              id={funds[i].id}
              rank={funds[i].rank}
              name={funds[i].name}
              type={funds[i].type}
              risk={funds[i].risk}
              availability={funds[i].availability}
              monthlyPerformance={funds[i].monthlyPerformance}
              annualPerformance={funds[i].annualPerformance}
            />
          );
        })
      }
    </div>
  );
};

export default CardList;
