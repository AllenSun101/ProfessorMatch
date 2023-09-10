'use client'
import React, { useState } from 'react';

export default function Slider(){
    // Importance values
    const importanceValues = ["Not Important", "Somewhat Important", "Important", "Very Important"];

    // State to track the selected value
    const [selectedValue, setSelectedValue] = useState(0);

    // Function to update the selected value
    const updateValue = (value) => {
        setSelectedValue(value);
    };

    <div className="flex flex-col items-center mt-10">
      <div className="mb-4">
        <label className="text-xl">{importanceValues[selectedValue]}</label>
      </div>
      <input
        type="range"
        className="w-64"
        min="0"
        max="3"
        step="1"
        value={selectedValue}
        onChange={(e) => updateValue(parseInt(e.target.value))}
      />
        
    </div>
}