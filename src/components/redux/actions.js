export const setOpen = (open) => ({
  type: "set-open",
  payload: open,
});
export const openOnSelect = (select) => ({
  type: "set-select",
  payload: select,
});
export const changePosition = (select) => ({
  type: "set-position",
  payload: select,
});
export const changeFont = (font) => ({
  type: "change-font",
  payload: font,
});
export const changeBold = (bold) => ({
  type: "change-bold",
  payload: bold,
});
export const changeItalic = (italic) => ({
  type: "set-italic",
  payload: italic,
});
export const changeSize = (size) => ({
  type: "set-size",
  payload: size,
});
export const changeHeader = (value) => ({
  type: "set-display",
  payload: value,
});
