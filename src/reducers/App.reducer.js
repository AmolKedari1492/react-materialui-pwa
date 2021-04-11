import { APP_LOAD } from "../constants/";

const AppReducer = (state = {}, action) => {
  switch (action.type) {
    case APP_LOAD:
    default:
      return state;
  }
};

export default AppReducer;
