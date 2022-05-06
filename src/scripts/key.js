export class Key {
  constructor({
    text = 'q/й', width = '40px', code, dark = false, textArea, highlighted = false, handleClick = () => {
      this.textArea.value += this.getText(this.lang, this.shift);
    },
  }) {
    this.text = text; // qQйЙ
    this.textArea = textArea;
    this.width = width;
    this.code = code;
    this.dark = dark;
    this.highlighted = highlighted;
    this.handleClick = handleClick;
    this.keyContainer = document.createElement('div');
    this.keyContainer.addEventListener('click', this.handleClick);
  }

  setHighlighted(value) {
    this.highlighted = value;
    this.render(this.lang, this.shift);
  }

  getText(lang, shift) {
    if (this.dark) return this.text;
    const letters = this.text.split('');
    if (lang === 'en' && !shift) { return letters[0]; }
    if (lang === 'en' && shift) { return letters[1]; }
    if (lang === 'ru' && !shift) { return letters[2]; }
    if (lang === 'ru' && shift) { return letters[3]; }
    return '';
  }

  render(lang, shift) {
    this.lang = lang;
    this.shift = shift;
    this.keyContainer.innerHTML = this.getText(lang, shift);
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
