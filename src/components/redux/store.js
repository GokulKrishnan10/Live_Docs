import { configureStore } from "@reduxjs/toolkit";
const initialValue = {
  open: false,
  xLocation: 0,
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
    default:
      return state;
  }
}
const store = configureStore(storeReduce);
export default store;
