import { configureStore } from "@reduxjs/toolkit";
const initialValue = {
  open: false,
  xLocation: 0,
  select: false,
};
function storeReduce(state = initialValue, actions) {
  switch (actions.type) {
    case "set-open": {
      return {
        ...state,
        open: actions.payload.open,
        xLocation: actions.payload.x,
      };
    }
    case "set-select": {
      return {
        ...state,
        select: true,
      };
    }
    default:
      return state;
  }
}
const store = configureStore({ reducer: storeReduce });
export default store;
