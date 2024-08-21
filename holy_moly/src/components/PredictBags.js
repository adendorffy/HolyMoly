import React from "react";

const PredictBags = ({ photo }) => {
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  return (
    <div>
      {photo && (
        <p>Predicted Number of Asphalt Bags: {generateRandomNumber()}</p>
      )}
    </div>
  );
};

export default PredictBags;
