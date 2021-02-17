import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  onChangeHandler,
  fieldsValidation,
} from "../../redux/actions/registration-actions";

const Registration = () => {
  const state = useSelector((state) => state.regReducer);
  const dispatch = useDispatch();
  
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
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(fieldsValidation())}
      >
        Register
      </Button>
    </div>
  );
};

export default Registration;
