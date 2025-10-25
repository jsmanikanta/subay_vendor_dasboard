import React from "react";
import { useState } from "react";

function Assignment() {
  const [colors, setColors] = useState(Array(9).fill("white"));
  const [clickOrder, setClickOrder] = useState([]); // Stores the order of clicks

  const handleClick = (index) => {
    if (colors[index] === "white") {
      const newColors = [...colors];
      newColors[index] = "green"; // Change clicked box to green
      setColors(newColors);
      setClickOrder([...clickOrder, index]); // Store the order of clicks
    }

    // when we click last box
    if (index === 8) {
      let i = 0;
      const interval = setInterval(() => {
        if (i < clickOrder.length) {
          const newColors = [...colors];
          newColors[clickOrder[i]] = "orange"; // Change to orange in order of clicks
          setColors(newColors);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 250);
    }
  };

  return (
    <div className="matrix">
      {colors.map((color, index) => (
        <button
          key={index}
          className="box"
          onClick={() => handleClick(index)}
          style={{ backgroundColor: color }}>
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Assignment;
