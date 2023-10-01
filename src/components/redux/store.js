import { configureStore } from "@reduxjs/toolkit";
const initialValue = {
  open: false,
  xLocation: 0,
  select: false,
  position: { x: 0, y: 0 },
  font: "",
  bold: "400",
  italic: "normal",
  size: "17",
  value: true,
  image: [],
  imageSettings: false,
  globalRightClick: false,
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
      console.log("Bold or not", actions.payload);
      return {
        ...state,
        bold: actions.payload,
      };
    }
    case "set-italic": {
      console.log("Italic is being set or not", actions.payload);
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
    case "insert-image": {
      console.log(
        "new data for insert image==================================>",
        actions.payload
      );
      return {
        ...state,
        image: [...state.image, actions.payload],
      };
    }
    case "image-settings": {
      return {
        ...state,
        imageSettings: actions.payload,
      };
    }
    case "right-click": {
      return {
        ...state,
        globalRightClick: actions.payload,
      };
    }
    default:
      return state;
  }
}
const store = configureStore({ reducer: storeReduce });
export default store;
