import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onHandleChange } from "../../redux/actions/login-actions";
import TextField from "@material-ui/core/TextField";
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
        />
        <TextField
          id="password"
          value={state.fields.password.value}
          onChange={(e) =>
            dispatch(onHandleChange(e.target.id, e.target.value))
          }
        />
      </div>
    </div>
  );
};

export default Login;
