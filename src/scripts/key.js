import { insertInTextarea } from './insert-in-textarea';

export class Key {
  constructor({
    text = 'q/й', width = '40px', code, dark = false, textArea, highlighted = false, handleMouseDown = () => {
      insertInTextarea(this.textArea, this.getText(this.lang, this.shift, this.caps));
    }, handleMouseUp,
  }) {
    this.text = text;
    this.textArea = textArea;
    this.width = width;
    this.code = code;
    this.dark = dark;
    this.highlighted = highlighted;
    this.handleMouseDown = handleMouseDown;
    this.handleMouseUp = handleMouseUp;
    this.keyContainer = document.createElement('div');
    this.keyContainer.addEventListener('mousedown', (event) => {
      this.handleMouseDown(event);
      const handler = (ievent) => {
        if (this.handleMouseUp) { this.handleMouseUp(ievent); }
        document.removeEventListener('mouseup', handler);
      };
      document.addEventListener('mouseup', handler);
    });
    this.keyContainer.addEventListener('mouseup', this.handleMouseUp);
  }

  setHighlighted(value) {
    this.highlighted = value;
    this.render(this.lang, this.shift, this.caps);
  }

  getText(lang, shift, caps) {
    if (this.dark) return this.text;
    const letters = this.text.split('');
    const [lowerEN, upperEN, lowerRU, upperRU, capsEN, capsRU, capsShiftEN, capsShiftRU] = letters;
    if (lang === 'en' && !shift && !caps) { return lowerEN; }
    if (lang === 'en' && shift && !caps) { return upperEN; }
    if (lang === 'ru' && !shift && !caps) { return lowerRU; }
    if (lang === 'ru' && shift && !caps) { return upperRU; }
    if (lang === 'en' && caps && !shift) { return capsEN; }
    if (lang === 'ru' && caps && !shift) { return capsRU; }
    if (lang === 'en' && caps && shift) { return capsShiftEN; }
    if (lang === 'ru' && caps && shift) { return capsShiftRU; }
    return '';
  }

  render(lang, shift, caps) {
    this.lang = lang;
    this.shift = shift;
    this.caps = caps;
    this.keyContainer.innerHTML = this.getText(lang, shift, caps);
    this.keyContainer.style.width = this.width;
    this.keyContainer.classList.add('key');
    if (this.dark === true) {
      this.keyContainer.classList.add('key-dark');
    }
    if (this.highlighted === true) {
      this.keyContainer.classList.add('highlighted');
    } else {
      this.keyContainer.classList.remove('highlighted');
    }

    return this.keyContainer;
  }
}
