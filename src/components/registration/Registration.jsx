import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { fieldsConfig } from "./regFieldsconf";
import { onChangeHandler } from "../../redux/actions/registration-actions";

const Registration = () => {
  const state = useSelector((state) => state.regReducer);
  const dispatch = useDispatch();
  console.log("STate", state);
  return (
    <div className="registration">
      {state.fields.map((element, key) => {
        return (
          <TextField
            key={key}
            id={element.id}
            label={element.label}
            value={element.value}
            error={element.error}
            helperText={element.error ? element.helperText : ""}
            onChange={(e) =>
              dispatch(onChangeHandler(e.target.id, e.target.value))
            }
          />
        );
      })}
    </div>
  );
};

export default Registration;
