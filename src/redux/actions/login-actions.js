import * as action from "../types/login-types";

export const onHandleChange = (id, value) => (
  console.log(id),
  {
    type: action.ONCHANGE,
    name: id,
    value: value,
  }
);
