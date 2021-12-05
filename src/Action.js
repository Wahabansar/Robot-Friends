import { CHANGE_SEARCH_FIELD } from "./Constant.js";

const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };
};

export default setSearchField;
