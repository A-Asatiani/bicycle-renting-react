import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "./index.css";

const Header = () => {
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
                label="Search..."
                margin="normal"
                variant="outlined"
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
