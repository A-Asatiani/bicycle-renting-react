import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { choosLanguage } from "../../../redux/actions/change-language-actions";
import i18n from "../../../i18n/i18n";
import { withNamespaces } from "react-i18next";
import "./index.css";

const DropDown = () => {
  const state = useSelector((state) => state.language.country);

  const change = (lng) => {
    return i18n.changeLanguage(lng);
  };

  return (
    <div className="drop-down">
      <h4>language</h4>
      <div className="drop-down-content">
        {state.map((element, index) => {
          console.log(element);
          return (
            <div
              className="content"
              key={index}
              onClick={() => change(element.lang)}
            >
              <img src={element.flag} alt="flag" className="flags" />
              <span>{element.lang}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withNamespaces()(DropDown);
