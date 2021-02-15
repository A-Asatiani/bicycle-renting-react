import {
  ONCHANGE,
  EMAILVALIDATION,
  PASSWORDVALIDATION,
  ISBUTTONDISABLED,
} from "../types/login-types";

const initialState = {
  fields: {
    email: {
      value: "",
      isPasswordCorrect: false,
    },
    password: {
      value: "",
      isPasswordCorrect: false,
    },
  },
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ONCHANGE:
      return {
        fields: {
          ...state.fields,
          [action.name]: {
            ...state.fields[action.name],
            value: action.value,
          },
        },
      };
    case EMAILVALIDATION:
      return {
        fields: {
          ...state.fields,
          email: {
            ...state.fields.email,
            isPasswordCorrect: /(.+)@(.+){2,}\.(.+){2,}/.test(action.value)
              ? false
              : true,
          },
        },
      };
    case PASSWORDVALIDATION:
      return {
        fields: {
          ...state.fields,
          password: {
            ...state.fields.password,
            isPasswordCorrect: action.value.length < 5 ? true : false,
          },
        },
      };
    default:
      return state;
  }
};
