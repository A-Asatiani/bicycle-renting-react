import { ONCHANGE } from "../types/registration-types";
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
    default:
      return state;
  }
};
