import React from "react";
import georgian from "../../../assets/georgian.jpeg";
import eng from "../../../assets/eng.jpg";
import "./index.css";

const DropDown = () => {
  const testData = [
    {
      flag: georgian,
      lang: "ge",
    },
    {
      flag: eng,
      lang: "en",
    },
  ];

  return (
    <div className="drop-down">
      <h4>language</h4>
      <div className="drop-down-content">
        {testData.map((element, index) => {
          return (
            <div className="content" key={index}>
              <img src={element.flag} alt="flag" className="flags" />
              <span>{element.lang}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropDown;
