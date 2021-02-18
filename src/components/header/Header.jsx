import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DropDown from "./dropdown/DropDown";
import { withNamespaces } from "react-i18next";
import "./index.css";

const Header = ({ t }) => {
  const listOfBike = ["awdad", "awdawd"];

  return (
    <div className="header">
      <div className="header-items-wrapper">
        <div className="logo-wrapper">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="search-bar">
          <Autocomplete
            id="search"
            freeSolo
            options={listOfBike.map((option) => option)}
            renderInput={(params) => (
              <TextField
                {...params}
                label={t("Search...")}
                margin="normal"
                variant="outlined"
              />
            )}
          />
        </div>
        <div className="drop-down-wrapper">
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(Header);
