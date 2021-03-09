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

function tableHTMLCreation() {
  return `<div class = 'item_1'>1</div>
  <div class = 'item_2'>704T10-08-TS</div>
  <div class = 'item_3'>3</div>
  <div class = 'item_4'>10" #150 FFSO Nozzle (8" CL)</div>
  <div class = 'item_5'>ET</div>`;
}

for (const button of document.querySelectorAll('button')) {
  button.addEventListener('click', function () {
    const newhtml = tableHTMLCreation();
    document
      .querySelector('.header_item_5')
      .insertAdjacentHTML('afterend', newhtml);
  });
}

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
