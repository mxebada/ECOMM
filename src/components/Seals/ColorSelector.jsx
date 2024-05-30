import React, { useState } from 'react';

const colors = ['#007bff', '#ff4d4d', '#000000', '#ffeb3b', '#ff00ff', '#f8d7da'];

const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="color-selector p-3">
      <h3>COLOR</h3>
      <div className="color-options my-3">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color-option ${selectedColor === color ? 'selected' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
