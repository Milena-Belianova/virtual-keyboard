import { Key } from './key';

export class Keyboard {
  constructor(element, textArea) {
    this.element = element;
    this.textArea = textArea;
    this.caps = false;
    this.lang = 'en';

    const KEYS = {
      Backquote: new Key({
        text: '`~ёЁ', code: 'Backquote', textArea: this.textArea,
      }),
      Digit1: new Key({
        text: '1!1!', code: 'Digit1', textArea: this.textArea,
      }),
      Digit2: new Key({
        text: '2@2"', code: 'Digit2', textArea: this.textArea,
      }),
      Digit3: new Key({
        text: '3#3№', code: 'Digit3', textArea: this.textArea,
      }),
      Digit4: new Key({
        text: '4$4;', code: 'Digit4', textArea: this.textArea,
      }),
      Digit5: new Key({
        text: '5%5%', code: 'Digit5', textArea: this.textArea,
      }),
      Digit6: new Key({
        text: '6^6:', code: 'Digit6', textArea: this.textArea,
      }),
      Digit7: new Key({
        text: '7&7?', code: 'Digit7', textArea: this.textArea,
      }),
      Digit8: new Key({
        text: '8*8*', code: 'Digit8', textArea: this.textArea,
      }),
      Digit9: new Key({
        text: '9(9(', code: 'Digit9', textArea: this.textArea,
      }),
      Digit0: new Key({
        text: '0)0)', code: 'Digit0', textArea: this.textArea,
      }),
      Minus: new Key({
        text: '-_-_', code: 'Minus', textArea: this.textArea,
      }),
      Equal: new Key({
        text: '=+=+', code: 'Equal', textArea: this.textArea,
      }),
      Backspace: new Key({
        text: 'Backspace',
        width: '100px',
        code: 'Backspace',
        dark: true,
        textArea: this.textArea,
        handleClick: () => {
          const cursorStart = this.textArea.selectionStart;
          this.textArea.value = this.textArea.value.slice(0, this.textArea.selectionStart - 1)
            + this.textArea.value.slice(this.textArea.selectionStart);

          this.textArea.selectionStart = cursorStart - 1;
          this.textArea.selectionEnd = this.textArea.selectionStart;
        },
      }),
      Tab: new Key({
        text: 'Tab',
        width: '50px',
        code: 'Tab',
        dark: true,
        textArea: this.textArea,
        handleClick: () => {
          this.textArea.value += '    ';
        },
      }),
      KeyQ: new Key({
        text: 'qQйЙ', code: 'KeyQ', textArea: this.textArea,
      }),
      KeyW: new Key({
        text: 'wWцЦ', code: 'KeyW', textArea: this.textArea,
      }),
      KeyE: new Key({
        text: 'eEуУ', code: 'KeyE', textArea: this.textArea,
      }),
      KeyR: new Key({
        text: 'rRкК', code: 'KeyR', textArea: this.textArea,
      }),
      KeyT: new Key({
        text: 'tTеЕ', code: 'KeyT', textArea: this.textArea,
      }),
      KeyY: new Key({
        text: 'yYнН', code: 'KeyY', textArea: this.textArea,
      }),
      KeyU: new Key({
        text: 'uUгГ', code: 'KeyU', textArea: this.textArea,
      }),
      KeyI: new Key({
        text: 'iIшШ', code: 'KeyI', textArea: this.textArea,
      }),
      KeyO: new Key({
        text: 'oOщЩ', code: 'KeyO', textArea: this.textArea,
      }),
      KeyP: new Key({
        text: 'pPзЗ', code: 'KeyP', textArea: this.textArea,
      }),
      BracketLeft: new Key({
        text: '[{хХ', code: 'BracketLeft', textArea: this.textArea,
      }),
      BracketRight: new Key({
        text: ']}ъЪ', code: 'BracketRight', textArea: this.textArea,
      }),
      Backslash: new Key({
        text: '\\|\\/', code: 'Backslash', textArea: this.textArea,
      }),
      Delete: new Key({
        text: 'Del',
        width: '44px',
        code: 'Delete',
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
      }),
      CapsLock: new Key({
        text: 'Capslock',
        width: '100px',
        code: 'CapsLock',
        dark: true,
        textArea: this.textArea,
        handleClick: () => {
          this.caps = !this.caps;
        },
      }),
      KeyA: new Key({
        text: 'aAфФ', code: 'KeyA', textArea: this.textArea,
      }),
      KeyS: new Key({
        text: 'sSыЫ', code: 'KeyS', textArea: this.textArea,
      }),
      KeyD: new Key({
        text: 'dDвВ', code: 'KeyD', textArea: this.textArea,
      }),
      KeyF: new Key({
        text: 'fFаА', code: 'KeyF', textArea: this.textArea,
      }),
      KeyG: new Key({
        text: 'gGпП', code: 'KeyG', textArea: this.textArea,
      }),
      KeyH: new Key({
        text: 'hHрР', code: 'KeyH', textArea: this.textArea,
      }),
      KeyJ: new Key({
        text: 'jJоО', code: 'KeyJ', textArea: this.textArea,
      }),
      KeyK: new Key({
        text: 'kKлЛ', code: 'KeyK', textArea: this.textArea,
      }),
      KeyL: new Key({
        text: 'lLдД', code: 'KeyL', textArea: this.textArea,
      }),
      Semicolon: new Key({
        text: ';:жЖ', code: 'Semicolon', textArea: this.textArea,
      }),
      Quote: new Key({
        text: '\'"эЭ', code: 'Quote', textArea: this.textArea,
      }),
      Enter: new Key({
        text: 'Enter',
        width: '86px',
        code: 'Enter',
        dark: true,
        textArea: this.textArea,
        handleClick: () => { this.textArea.value += '\n'; },
      }),
      ShiftLeft: new Key({
        text: 'Shift', width: '100px', code: 'ShiftLeft', dark: true, textArea: this.textArea,
      }),
      KeyZ: new Key({
        text: 'zZяЯ', code: 'KeyZ', textArea: this.textArea,
      }),
      KeyX: new Key({
        text: 'xXчЧ', code: 'KeyX', textArea: this.textArea,
      }),
      KeyC: new Key({
        text: 'cCсС', code: 'KeyC', textArea: this.textArea,
      }),
      KeyV: new Key({
        text: 'vVмМ', code: 'KeyV', textArea: this.textArea,
      }),
      KeyB: new Key({
        text: 'bBиИ', code: 'KeyB', textArea: this.textArea,
      }),
      KeyN: new Key({
        text: 'nNтТ', code: 'KeyN', textArea: this.textArea,
      }),
      KeyM: new Key({
        text: 'mMьЬ', code: 'KeyM', textArea: this.textArea,
      }),
      Comma: new Key({
        text: ',<бБ', code: 'Comma', textArea: this.textArea,
      }),
      Period: new Key({
        text: '.>юЮ', code: 'Period', textArea: this.textArea,
      }),
      Slash: new Key({
        text: '/?.,', code: 'Slash', textArea: this.textArea,
      }),
      ArrowUp: new Key({
        text: '&#9650;',
        code: 'ArrowUp',
        dark: true,
        textArea: this.textArea,
      }),
      ShiftRight: new Key({
        text: 'Shift', width: '86px', code: 'ShiftRight', dark: true, textArea: this.textArea,
      }),
      ControlLeft: new Key({
        text: 'Ctrl', code: 'ControlLeft', dark: true, textArea: this.textArea,
      }),
      MetaLeft: new Key({
        text: 'Win', dark: true, code: 'MetaLeft', textArea: this.textArea,
      }),
      AltLeft: new Key({
        text: 'Alt', code: 'AltLeft', dark: true, textArea: this.textArea,
      }),
      Space: new Key({
        text: '&mdash;', width: '330px', code: 'Space', dark: true, textArea: this.textArea, handleClick: () => { this.textArea.value += ' '; },
      }),
      AltRight: new Key({
        text: 'Alt', code: 'AltRight', dark: true, textArea: this.textArea,
      }),
      ArrowLeft: new Key({
        text: '&#9668;',
        code: 'ArrowLeft',
        dark: true,
        textArea: this.textArea,
        handleClick: () => {
          if (this.textArea.selectionStart > 0) {
            this.textArea.selectionStart += -1;
          }
          this.textArea.selectionEnd = this.textArea.selectionStart;
        },
      }),
      ArrowDown: new Key({
        text: '&#9660;', code: 'ArrowDown', dark: true, textArea: this.textArea,
      }),
      ArrowRight: new Key({
        text: '&#9658;',
        code: 'ArrowRight',
        dark: true,
        textArea: this.textArea,
        handleClick: () => {
          if (this.textArea.selectionStart < this.textArea.value.length) {
            this.textArea.selectionStart += +1;
          }
          this.textArea.selectionEnd = this.textArea.selectionStart;
        },
      }),
      ControlRight: new Key({
        text: 'Ctrl', code: 'ControlRight', dark: true, textArea: this.textArea,
      }),
    };

    const DIGITS = [KEYS.Digit1, KEYS.Digit2, KEYS.Digit3, KEYS.Digit4, KEYS.Digit5,
      KEYS.Digit6, KEYS.Digit7, KEYS.Digit8, KEYS.Digit9, KEYS.Digit0];
    const LETERS_R1 = [KEYS.KeyQ, KEYS.KeyW, KEYS.KeyE, KEYS.KeyR, KEYS.KeyT, KEYS.KeyY,
      KEYS.KeyU, KEYS.KeyI, KEYS.KeyO, KEYS.KeyP, KEYS.BracketLeft, KEYS.BracketRight];
    const LETERS_R2 = [KEYS.KeyA, KEYS.KeyS, KEYS.KeyD, KEYS.KeyF, KEYS.KeyG, KEYS.KeyH,
      KEYS.KeyJ, KEYS.KeyK, KEYS.KeyL, KEYS.Semicolon, KEYS.Quote];
    const LETERS_R3 = [KEYS.KeyZ, KEYS.KeyX, KEYS.KeyC, KEYS.KeyV, KEYS.KeyB, KEYS.KeyN,
      KEYS.KeyM, KEYS.Comma, KEYS.Period, KEYS.Slash];

    this.keysLayout = [
      [KEYS.Backquote, ...DIGITS, KEYS.Minus, KEYS.Equal, KEYS.Backspace],
      [KEYS.Tab, ...LETERS_R1, KEYS.Backslash, KEYS.Delete],
      [KEYS.CapsLock, ...LETERS_R2, KEYS.Enter],
      [KEYS.ShiftLeft, ...LETERS_R3, KEYS.ArrowUp, KEYS.ShiftRight],
      [KEYS.ControlLeft, KEYS.MetaLeft, KEYS.AltLeft, KEYS.Space,
        KEYS.AltRight, KEYS.ArrowLeft, KEYS.ArrowDown, KEYS.ArrowRight, KEYS.ControlRight],
    ];

    this.keysLayout.forEach((row) => {
      const rowContainer = document.createElement('div');
      rowContainer.classList.add('row');
      row.forEach((key) => {
        rowContainer.appendChild(key.render(this.lang));
      });
      this.element.appendChild(rowContainer);
    });

    this.textArea.addEventListener('keydown', (event) => {
      KEYS[event.code].setHighlighted(true);
    });

    this.textArea.addEventListener('keyup', (event) => {
      KEYS[event.code].setHighlighted(false);
    });
  }

  render() {
    // this.keys.forEach((row) => {
    //   row.forEach((key) => key.render(this.lang));
    // });
  }
}
