import { ONCHANGE, FIELDSVALIDATION } from "../types/registration-types";
import { fieldsConfig } from "../../components/registration/regFieldsconf";

const initialState = {
  fields: fieldsConfig,
};

export const regReducer = (state = initialState, action) => {
  switch (action.type) {
    case ONCHANGE:
      const newState = [...state.fields];
      newState[
        newState.findIndex((element) => element.id === action.name)
      ].value = action.value;
      return {
        ...state,
        fields: newState,
      };
    case FIELDSVALIDATION:
      const validationFields = [...state.fields].map((element, index, arr) => ({
        id: element.id,
        label: element.label,
        value: element.value,
        error:
          element.id === "email" &&
          !/(.+)@(.+){2,}\.(.+){2,}/.test(element.value)
            ? (element.error = true)
            : element.value.length < 5
            ? (element.error = true)
            : (element.error = false),
        helperText: element.helperText,
      }));
      return {
        ...state,
        fields: validationFields,
      };
    default:
      return state;
  }
};
