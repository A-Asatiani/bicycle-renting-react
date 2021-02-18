import * as type from "../types/change-language-types";

export const choosLanguage = (lang) => ({
  type: type.CHANGELANGUAGE,
  language: lang,
});
