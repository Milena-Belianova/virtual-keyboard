/* eslint-disable no-param-reassign */
export const insertInTextarea = (textarea, text) => {
  const cursorStart = textarea.selectionStart;
  textarea.value = textarea.value.slice(0, textarea.selectionStart)
            + text
            + textarea.value.slice(textarea.selectionStart);
  textarea.selectionStart = cursorStart + 1;
  textarea.selectionEnd = textarea.selectionStart;
};
