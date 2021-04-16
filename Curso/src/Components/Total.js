import React from "react";

const Total = props => {
  const total = props.parts.reduce(
    (prevValue, currentValue) => prevValue + currentValue.exercises,
    0
  );
  return <p>Total: {total}</p>;
};

export default Total;