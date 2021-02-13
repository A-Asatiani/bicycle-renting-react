import { ONCHANGE, EMAILVALIDATION } from "../types/login-types";

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
    default:
      return state;
  }
};
