export class Key {
  constructor({
    text = 'q/й', width = '40px', dark = false, textArea, handleClick = () => {
      this.textArea.value += this.text[this.lang];
    },
  }) {
    const en = text.split('/')[0];
    const ru = text.split('/')[1];

    this.text = { en, ru };
    this.textArea = textArea;
    this.width = width;
    this.dark = dark;
    this.handleClick = handleClick;
  }

  render(lang, rowEl) {
    this.lang = lang;
    const keyContainer = document.createElement('div');
    keyContainer.innerHTML = this.text[lang];
    keyContainer.style.width = this.width;
    keyContainer.classList.add('key');
    if (this.dark === true) {
      keyContainer.classList.add('key-dark');
    }
    keyContainer.addEventListener('click', this.handleClick);
    rowEl.appendChild(keyContainer);
    return rowEl;
  }
}
