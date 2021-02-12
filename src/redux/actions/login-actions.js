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

export const fieldsValidation = (emailValue, passwordValue) => (
  dispatch,
  getState
) => {
  dispatch(emailValidation(emailValue));
  dispatch(passwordValidation(passwordValue));
  const {
    loginReducer: { fields },
  } = getState();

  if (fields.email.isPasswordCorrect || fields.password.isPasswordCorrect) {
    return;
  }
  return axiosCall();
};

export const axiosCall = () => {
  localStorage.setItem("token", "awkdmakwmdkamwdkm");
  console.log("token", localStorage.getItem("token"));
  return localStorage.getItem("token");
};
