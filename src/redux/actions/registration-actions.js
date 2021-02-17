import * as type from "../types/registration-types";

export const onChangeHandler = (id, value) => ({
  type: type.ONCHANGE,
  name: id,
  value: value,
});

export const fieldsValidation = () => ({
  type: type.FIELDSVALIDATION,
});
