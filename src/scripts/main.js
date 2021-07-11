'use strict';

const elements = document.querySelectorAll('.population');
let totalPop = 0;

for (let el = 0; el < elements.length; el++) {
  totalPop += parseInt(elements[el].innerText.split(',').join(''));
}

document.querySelector('.total-population').textContent
= (totalPop).toLocaleString();

document.querySelector('.average-population').textContent
= (totalPop / elements.length).toLocaleString();
