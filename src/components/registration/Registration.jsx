import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { fieldsConfig } from "./regFieldsconf";

const Registration = () => {
  return (
    <div className="registration">
      {fieldsConfig.map((element) => {
        return (
          <TextField
            id={element.id}
            label={element.label}
            value={element.value}
            error={element.error}
            helperText={element.error ? element.helperText : ""}
          />
        );
      })}
    </div>
  );
};

export default Registration;
