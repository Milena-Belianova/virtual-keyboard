import { Keyboard } from './keyboard';

export const renderMainPage = (element) => {
  const divContainer = document.createElement('div');
  const header1 = document.createElement('h1');
  const textArea = document.createElement('textarea');
  const divKeyboardContainer = document.createElement('div');
  const divTextContainer = document.createElement('div');
  const textOS = document.createElement('p');
  const textLangSwitch = document.createElement('p');

  divContainer.classList.add('page-container');

  header1.innerText = 'Виртуальная Клавиатура';
  header1.classList.add('title');
  divContainer.appendChild(header1);

  textArea.classList.add('textarea');
  textArea.setAttribute('autofocus', '');
  textArea.addEventListener('focusout', () => textArea.focus());
  divContainer.appendChild(textArea);

  divKeyboardContainer.classList.add('keyboard-container');
  const keyboard = new Keyboard(divKeyboardContainer, textArea);
  keyboard.render('en');
  divContainer.appendChild(divKeyboardContainer);

  divTextContainer.classList.add('text-container');
  textOS.innerText = 'Клавиатура создана в операционной системе Windows';
  textLangSwitch.innerText = 'Для переключения языка комбинация: левыe ctrl + alt';
  divTextContainer.appendChild(textOS);
  divTextContainer.appendChild(textLangSwitch);
  divContainer.appendChild(divTextContainer);

  element.appendChild(divContainer);
};
