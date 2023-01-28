import '../scss/styles.scss';
import { printSelect } from './printSelect.js';

const themesElement = document.getElementById('themes');

themesElement.addEventListener('change', printSelect);
