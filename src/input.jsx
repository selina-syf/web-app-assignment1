import React, { useState } from "react";
import "./controlled.css";

export default function ControlledComponent() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <form>
      <label>
        Name:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <p className="controlled__text">Name: {inputValue}</p>
      <button type="submit">Submit</button>
      <br />
      <label>
        Password:
        <input type="password" value={inputValue} onChange={handleChange} />
      </label>
      <p className="controlled__password">Password: {inputValue}</p>
      <button type="submit">Submit</button>
      

    </form>
  );
}
