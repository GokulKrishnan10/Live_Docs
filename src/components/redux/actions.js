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
export const insertImage = (value) => ({
  type: "insert-image",
  payload: value,
});
export const displayImageSettings = (value) => ({
  type: "image-settings",
  payload: value,
});
export const setRightClick = (value) => ({
  type: "right-click",
  payload: value,
});
export const setPage = (value) => ({
  type: "increase-page",
  payload: value,
});
export const setClickPosition = (value) => ({
  type: "set-click-position",
  payload: value,
});
export const setSelectPosition = (value) => ({
  type: "set-select-position",
  payload: value,
});
export const setAddComment=(value)=>({
  type:'add-comment',
  payload:value
})
export const setOpenComments=(value)=>({
  type:'open-comment',
  payload:value
})