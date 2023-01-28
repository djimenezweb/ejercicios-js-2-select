import { list } from 'postcss';
import { THEMES } from './constants.js';
const listElement = document.getElementById('list');

export const printSelect = ev => {
  const selectedTheme = Object.keys(THEMES)[ev.target.value];
  if (ev.target.value === 'x') {
    return;
  }
  listElement.innerHTML = '';
  const fragment = document.createDocumentFragment();
  THEMES[selectedTheme].forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    fragment.append(li);
  });
  listElement.append(fragment);
};
