import * as action from "../types/login-types";

export const onHandleChange = (id, value) => (
  console.log(id),
  {
    type: action.ONCHANGE,
    name: id,
    value: value,
  }
);

export const emailValidation = (value) => ({
  type: action.EMAILVALIDATION,
  value: value,
});

export const passwordValidation = (value) => ({
  type: action.PASSWORDVALIDATION,
  value: value,
});
