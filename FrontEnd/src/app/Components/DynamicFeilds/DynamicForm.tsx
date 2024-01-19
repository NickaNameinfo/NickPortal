// components/DynamicForm.js
import React, { useState } from "react";

const DynamicForm = ({ fieldType }) => {
  const [fieldValue, setFieldValue] = useState<any>("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setFieldValue(e.target.value);
  };

  const validateField = () => {
    switch (fieldType) {
      case "text":
        if (!fieldValue.trim()) {
          setError("Please enter text");
          return false;
        }
        break;
      case "number":
        if (isNaN(fieldValue) || fieldValue.trim() === "") {
          setError("Please enter a valid number");
          return false;
        }
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(fieldValue)) {
          setError("Please enter a valid email address");
          return false;
        }
        break;
      // Add more validation cases for other field types as needed
      default:
        break;
    }

    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateField();

    if (isValid) {
      // Perform any additional actions with the valid field value
      console.log("Field value:", fieldValue);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {fieldType.charAt(0).toUpperCase() + fieldType.slice(1)}:
        <input
          type={fieldType}
          value={fieldValue}
          onChange={handleInputChange}
        />
      </label>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
