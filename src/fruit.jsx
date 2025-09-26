import { useState } from "react";

export default function Validate() {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(null);
  const [submittedValue, setSubmittedValue] = useState("");

  function handleInputChange(event) {
    const value = event.target.value;
    setInputValue(value);

    if (value.length < 5) {
      setInputError("Input must be at least 5 characters");
    } else {
      setInputError(null);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue.length >= 5) {
      setInputError(null);
      setSubmittedValue(inputValue);  // store submitted value
      setInputValue("");              // clear input field
    } else {
      setInputError("Input must be at least 5 characters");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Fruit:
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      {inputError && <div style={{ color: "red" }}>{inputError}</div>}
      <button type="submit">Submit</button>

      {/* Show submitted value if available */}
      {submittedValue && <p>You submitted: {submittedValue}</p>}
    </form>
  );
}
