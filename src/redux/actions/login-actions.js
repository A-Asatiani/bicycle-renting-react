import { keys } from "@material-ui/core/styles/createBreakpoints";
import * as action from "../types/login-types";

export const onHandleChange = (id, value) => ({
  type: action.ONCHANGE,
  name: id,
  value: value,
});

export const emailValidation = (value) => ({
  type: action.EMAILVALIDATION,
  value: value,
});

export const passwordValidation = (value) => ({
  type: action.PASSWORDVALIDATION,
  value: value,
});

export const axiosRequest = (emailValue, passwordValue, fields) => (
  dispatch
) => {
  dispatch(emailValidation(emailValue));
  dispatch(passwordValidation(passwordValue));
  console.log("fields", fields);
  // const isFieldsCorrect = Object.keys(fields).some((keys) => {
  //   // console.log("keys", fields[keys].isPasswordCorrect);
  //   return fields[keys].isPasswordCorrect === true;
  // });
  // console.log("@@@@isFieldsCorrect", isFieldsCorrect);
  console.log('fields.email.isPasswordCorrect', fields.password.isPasswordCorrect);
  if (fields.email.isPasswordCorrect || fields.password.isPasswordCorrect) {
    console.log('fields.email.isPasswordCorrect iffffffffffff', fields.email.isPasswordCorrect);
    return;
  }
  console.log("axios req");
};
