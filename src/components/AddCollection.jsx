import React, { useState } from "react";

const AddCollection = () => {
  const [selectedColor, setSelectedColor] = useState(""); // State to store the selected color

  // Event handler to update the selected color when the dropdown value changes
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div className="bg-white rounded-2xl p-5">
      <div className="text-[#30387D] poppins text-base font-medium">
        Add Collection
      </div>
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-semibold text-[#30387D] poppins"
        >
          Collection Name
        </label>
        <input
          type="text"
          placeholder="Collection name here"
          id="collectionName"
          className="bg-slate-100 p-3 rounded-lg ring-1 ring-gray-500 hover:placeholder:text-[#30387D] placeholder-italic"
        />
      </div>
      <div>
        <label
          htmlFor="color"
          className="block text-xs font-semibold text-[#30387D] poppins"
        >
          Select Icon Color
        </label>
        <select
          id="iconColor"
          className="bg-slate-100 p-3 rounded-lg ring-1 ring-gray-500 hover:placeholder:text-[#30387D] placeholder-italic"
          value={selectedColor} // Bind the selected value to the state
          onChange={handleColorChange} // Attach the event handler
        >
          <option value="">Select a color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
      </div>
      <p>Selected Color: {selectedColor}</p>
    </div>
  );
};

export default AddCollection;
