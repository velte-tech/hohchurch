import React, { useState } from "react";
import "./Box_check.css";

function CheckboxList() {
  const [checkedItem, setCheckedItem] = useState("");

  const handleChange = (event) => {
    setCheckedItem(event.target.name);
  };

  const checkboxes = [
    { name: "membership", key: "checkbox1", label: "Membership" },
    { name: "volunteer", key: "checkbox2", label: "Volunteer" },
    { name: "councelling", key: "checkbox3", label: "Councelling" },
  ];

  return (
    <div className="checkbox-list-container">
      <h2 className="ch-head">INTEREST</h2>
      {checkboxes.map((item) => (
        <label key={item.key}>
          {item.label}
          <input
            className="item-box"
            type="checkbox"
            name={item.name}
            checked={checkedItem === item.name}
            onChange={handleChange}
          />
        </label>
      ))}
    </div>
  );
}

export default CheckboxList;
