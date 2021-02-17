import * as type from "../types/registration-types";

export const onChangeHandler = (id, value) => ({
  type: type.ONCHANGE,
  name: id,
  value: value,
});

const fieldsValidation = () => ({
  type: type.FIELDSVALIDATION,
});

export const validate = (fields) => (dispatch) => {
  dispatch(fieldsValidation());
  const isFieldsValidated = fields.fields.some((element) => {
    return element.error;
  });
  if (isFieldsValidated) return;
  return axiosReq();
};

const axiosReq = () => {
  return console.log("registration passed successfully");
};
