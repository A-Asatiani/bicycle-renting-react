import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onHandleChange,
  fieldsValidation,
} from "../../redux/actions/login-actions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./index.css";

const Login = () => {
  const state = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();

  return (
    <div className="Login">
      <div className="input-fields">
        <TextField
          id="email"
          value={state.fields.email.value}
          onChange={(e) =>
            dispatch(onHandleChange(e.target.id, e.target.value))
          }
          error={state.fields.email.isPasswordCorrect ? true : false}
          helperText={
            state.fields.email.isPasswordCorrect
              ? "Email must includes chars: @ and ."
              : ""
          }
        />
        <TextField
          id="password"
          value={state.fields.password.value}
          onChange={(e) =>
            dispatch(onHandleChange(e.target.id, e.target.value))
          }
          error={state.fields.password.isPasswordCorrect ? true : false}
          helperText={
            state.fields.password.isPasswordCorrect
              ? "Password must includes min 5 chars"
              : ""
          }
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            dispatch(
              fieldsValidation(
                state.fields.email.value,
                state.fields.password.value
              )
            )
          }
        >
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default Login;
