import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  onChangeHandler,
  validate,
} from "../../redux/actions/registration-actions";
import { Link } from "react-router-dom";
import "./index.css";

const Registration = (props) => {
  const state = useSelector((state) => state.regReducer);
  const dispatch = useDispatch();
  console.log("props", props);
  return (
    <div className="registration">
      <div className="go-back-wrapper">
        <Link className="go-back-link" to="/login">
          &#8592; to login page
        </Link>
      </div>
      <div className="reg-inputs-wrapper">
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
          onClick={() => dispatch(validate(state))}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default Registration;
