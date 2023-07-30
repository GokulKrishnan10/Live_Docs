import { configureStore } from "@reduxjs/toolkit";
const initialValue = {
  open: false,
  xLocation: 0,
  select: false,
  position: { x: 0, y: 0 },
  font: "",
  bold: "300",
  italic: "normal",
  size: "17",
  value: true,
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
    case "set-position": {
      console.log("I think position is being changed dear", actions.payload);
      return {
        ...state,
        position: actions.payload,
      };
    }
    case "change-font": {
      console.log("Font have been changed in store", actions.payload);
      return {
        ...state,
        font: actions.payload,
      };
    }
    case "change-bold": {
      return {
        ...state,
        bold: actions.payload,
      };
    }
    case "set-italic": {
      return {
        ...state,
        italic: actions.payload,
      };
    }
    case "set-size": {
      console.log("Text size is being changed", actions.payload);
      return {
        ...state,
        size: actions.payload,
      };
    }
    case "set-display": {
      console.log("Header display have been changed", actions.payload);
      return {
        ...state,
        value: actions.payload,
      };
    }
    default:
      return state;
  }
}
const store = configureStore({ reducer: storeReduce });
export default store;
