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

const test = document.createElement('div');
const testcontent = document.createTextNode(
  `Qty: 1     ${nozzle.partNumber}     ${nozzle.diameter}" #150 ${nozzle.type} Nozzle (${nozzle.clearance}" CL)`
);
test.appendChild(testcontent);

function tableHTMLCreation() {
  return `<div class = 'test3'>test injections</div> `;
}

for (const button of document.querySelectorAll('button')) {
  button.addEventListener('click', function () {
    console.log(
      `Qty: 1     ${nozzle.partNumber}     ${nozzle.diameter}" #150 ${nozzle.type} Nozzle (${nozzle.clearance}" CL)`
    );
    document.body.appendChild(test);
    const newhtml = tableHTMLCreation();
    document.querySelector('div').insertAdjacentHTML('afterend', newhtml);
  });
}

//document.body.append(document.createElement('textarea'));
//https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

//read the above
