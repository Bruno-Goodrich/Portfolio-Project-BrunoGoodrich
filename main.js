// A minimal CSS framework: you can research
// and choose others, or use none at all.
import '@picocss/pico'

// Our stylesheet.
import './style.css'
import BinarySearch from './code-fragments/BinarySearch.js?raw'
document.querySelector('#BinarySearch').textContent = BinarySearch;

import CardPicker from './code-fragments/CardPicker.js?raw';
document.querySelector('#CardPicker').textContent = CardPicker;

import HandValue from './code-fragments/HandValue.ts?raw'
document.querySelector('#HandValue').textContent = HandValue

import Sad from './code-fragments/DepressedFilter.js?raw'
document.querySelector('#Sad').textContent = Sad

import BusCrashTowns from './code-fragments/BusCrashTown.ts?raw'
document.querySelector('#BusCrashTowns').textContent = BusCrashTowns

import townDropDown from './code-fragments/townDropDown.js?raw'
document.querySelector('#townDropDown').textContent = townDropDown

import diseaseModel from './code-fragments/DiseaseModel.ts?raw'
document.querySelector('#diseaseModel').textContent = diseaseModel

import updatePopulation from './code-fragments/updatePatient.tsx?raw'
document.querySelector('#updatePopulation').textContent = updatePopulation

// We can import raw code fragments for samples, like this:
/*import fragment from './code-fragments/fragment.js?raw'
let fragEl = document.querySelector('#fragment');
if (fragEl) {
  fragEl.textContent = fragment;
}
import importExample from './code-fragments/importExample.sh?raw'
document.querySelector('#importExample').textContent = importExample;
*/

// A code highlighter
import hljs from 'highlight.js'
// You can check the folder for other themes!
import 'highlight.js/styles/panda-syntax-dark.css'
// This next line of code automatically finds
// code blocks in your HTML (in <pre><code></code>
// </pre>) and makes them look pretty!
hljs.highlightAll();

// This is a pretty good start for JavaScript: we will add more as needed!
