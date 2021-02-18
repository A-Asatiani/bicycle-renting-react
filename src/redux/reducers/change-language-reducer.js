import georgian from "../../assets/georgian.jpeg";
import eng from "../../assets/eng.jpg";
import { CHANGELANGUAGE } from "../types/change-language-types";

const initialState = {
  country: [
    {
      flag: georgian,
      lang: "ge",
    },
    {
      flag: eng,
      lang: "en",
    },
  ],
};

export const changeLanguageReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
