import React, { useState } from "react";
import "../App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function App4() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [timesColorChanged, setTimesColorChanged] = useState(0);

  const onButtonClick = (color, timesColorChanged) => () => {
    setBackgroundColor(color);
    if (backgroundColor !== color) {
        setTimesColorChanged(timesColorChanged + 1);
        }
    };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color, timesColorChanged)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
        <p>Times color changed: {timesColorChanged}</p>
    </div>
  );
}

export default App4;
