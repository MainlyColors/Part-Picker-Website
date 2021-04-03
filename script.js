'use strict';

const nozzle = {
  diameter: 10,
  type: 'FFSO',
  clearance: 8,
  partNumber: '704B10-08-TS',
  orientation: 'std',
  facing: 'external',
};

const nozzles = {
  nozzle,
  random: 'hello',
};

let cnt = 0;

function tableHTMLCreation() {
  return `<div class = 'items'>${(cnt += 1)}</div>
  <div class = 'items'>704T10-08-TS</div>
  <div class = 'items'>3</div>
  <div class = 'items'>10" #150 FFSO Nozzle (8" CL)</div>
  <div class = 'items'>ET</div>`;
}

for (const button of document.querySelectorAll('button')) {
  button.addEventListener('click', function () {
    const newhtml = tableHTMLCreation();
    document
      .querySelector('.parts_list_container')
      .insertAdjacentHTML('beforeend', newhtml);
  });
}

const toggleSwitchExternal = document.querySelector(
  '.int_ext_checkbox_container > p'
);

const toggleSwitchInternal = document.querySelector(
  '.int_ext_checkbox_container > p:last-child'
);

const toggleSwtich = document.querySelector('.int_ext_checkbox');
let ffsoNozzleHeading = document.querySelector('.heading_ffso');
let rfsoNozzleHeading = document.querySelector('.heading_rfso');
console.log(toggleSwitchExternal);
console.log(toggleSwitchInternal);
console.log(toggleSwtich);
console.log(ffsoNozzleHeading);
console.log(rfsoNozzleHeading);

toggleSwtich.addEventListener('click', function () {
  // turns paragraph tag on and off
  toggleSwitchExternal.classList.toggle('toggle-on-JS');
  toggleSwitchInternal.classList.toggle('toggle-on-JS');
  // based on toggle switch, change h1 at top of nozzle grid
  if (toggleSwitchExternal.classList.contains('toggle-on-JS')) {
    ffsoNozzleHeading.textContent = 'External FFSO Nozzles';
    rfsoNozzleHeading.textContent = 'External RFSO Nozzles';
  } else {
    ffsoNozzleHeading.textContent = 'Internal FFSO Nozzles';
    rfsoNozzleHeading.textContent = 'Internal RFSO Nozzles';
  }
});

//document.body.append(document.createElement('textarea'));
//https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

//read the above
// console.log(
//   `Qty: 1     ${nozzle.partNumber}     ${nozzle.diameter}" #150 ${nozzle.type} Nozzle (${nozzle.clearance}" CL)`
// );

// const test = document.createElement('div');
// const testcontent = document.createTextNode(
//   `Qty: 1     ${nozzle.partNumber}     ${nozzle.diameter}" #150 ${nozzle.type} Nozzle (${nozzle.clearance}" CL)`
// );
// test.appendChild(testcontent);
// document.body.appendChild(test);
