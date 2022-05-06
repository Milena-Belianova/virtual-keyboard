import { Key } from './key';

export class Keyboard {
  constructor(element, textArea) {
    this.element = element;
    this.textArea = textArea;
  }

  render(lang) {
    const BACKSPACE = new Key({
      text: 'Backspace',
      width: '100px',
      dark: true,
      textArea: this.textArea,
      handleClick: () => {
        const cursorStart = this.textArea.selectionStart;
        this.textArea.value = this.textArea.value.slice(0, this.textArea.selectionStart - 1)
          + this.textArea.value.slice(this.textArea.selectionStart);

        this.textArea.selectionStart = cursorStart - 1;
        this.textArea.selectionEnd = this.textArea.selectionStart;
      },
    });
    const TAB = new Key({
      text: 'Tab', width: '50px', dark: true, textArea: this.textArea, handleClick: () => { this.textArea.value += '    '; },
    });
    const DEL = new Key({
      text: 'Del',
      width: '44px',
      dark: true,
      textArea: this.textArea,
      handleClick: () => {
        if (this.textArea.selectionStart <= this.textArea.value.length) {
          const cursorStart = this.textArea.selectionStart;
          this.textArea.value = this.textArea.value.slice(0, this.textArea.selectionStart)
          + this.textArea.value.slice(this.textArea.selectionStart + 1);

          this.textArea.selectionStart = cursorStart;
          this.textArea.selectionEnd = this.textArea.selectionStart;
        }
      },
    });
    const CAPSLOCK = new Key({
      text: 'Capslock', width: '100px', dark: true, textArea: this.textArea,
    });
    const ENTER = new Key({
      text: 'Enter', width: '86px', dark: true, textArea: this.textArea, handleClick: () => { this.textArea.value += '\n'; },
    });
    const LSHIFT = new Key({
      text: 'Shift', width: '100px', dark: true, textArea: this.textArea,
    });
    const UP_ARROW = new Key({ text: '&#9650;', dark: true, textArea: this.textArea });
    const RSHIFT = new Key({
      text: 'Shift', width: '86px', dark: true, textArea: this.textArea,
    });
    const LCTRL = new Key({
      text: 'Ctrl', dark: true, textArea: this.textArea,
    });
    const WIN = new Key({
      text: 'Win', dark: true, textArea: this.textArea,
    });
    const LALT = new Key({
      text: 'Alt', dark: true, textArea: this.textArea,
    });
    const SPACE = new Key({
      text: '&mdash;', width: '330px', textArea: this.textArea, handleClick: () => { this.textArea.focus(); this.textArea.value += ' '; },
    });
    const RALT = new Key({
      text: 'Alt', dark: true, textArea: this.textArea,
    });
    const LEFT_ARROW = new Key({
      text: '&#9668;',
      dark: true,
      textArea: this.textArea,
      handleClick: () => {
        if (this.textArea.selectionStart > 0) {
          this.textArea.selectionStart += -1;
        }
        this.textArea.selectionEnd = this.textArea.selectionStart;
      },
    });
    const DOWN_ARROW = new Key({ text: '&#9660;', dark: true, textArea: this.textArea });
    const RIGHT_ARROW = new Key({
      text: '&#9658;',
      dark: true,
      textArea: this.textArea,
      handleClick: () => {
        if (this.textArea.selectionStart < this.textArea.value.length) {
          this.textArea.selectionStart += +1;
        }
        this.textArea.selectionEnd = this.textArea.selectionStart;
      },
    });
    const RCTRL = new Key({
      text: 'Ctrl', dark: true, textArea: this.textArea,
    });

    const keys = [
      [...['`/ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='].map((text) => new Key({ text, textArea: this.textArea })), BACKSPACE],
      [TAB, ...['q/й', 'w/ц', 'e/у', 'r/к', 't/е', 'y/н', 'u/г', 'i/ш', 'o/щ', 'p/з', '[/х', ']/ъ', '\\'].map((text) => new Key({ text, textArea: this.textArea })), DEL],
      [CAPSLOCK, ...['a/ф', 's/ы', 'd/в', 'f/а', 'g/п', 'h/р', 'j/о', 'k/л', 'l/д', ';/ж', "'/э"].map((text) => new Key({ text, textArea: this.textArea })), ENTER],
      [LSHIFT, ...['z/я', 'x/ч', 'c/с', 'v/м', 'b/и', 'n/т', 'm/ь', ',/б', './ю', '&#47;/.'].map((text) => new Key({ text, textArea: this.textArea })), UP_ARROW, RSHIFT],
      [LCTRL, WIN, LALT, SPACE, RALT, LEFT_ARROW, DOWN_ARROW, RIGHT_ARROW, RCTRL],
    ];

    keys.forEach((row) => {
      const rowContainer = document.createElement('div');
      rowContainer.classList.add('row');
      row.forEach((key) => key.render(lang, rowContainer));
      this.element.appendChild(rowContainer);
    });
  }
}
