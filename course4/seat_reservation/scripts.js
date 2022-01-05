/*********** initial version ***********/


/*********** Creating the seats ***********/
const rows = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'
];
let html = '';
let counter = 1;

rows.forEach ( eachrow => {
    html += `<div class="label">${eachrow.toUpperCase()}</div>`;
    for (let i=0; i<3; i++) {
        html += `<div id="${eachrow + counter}">${counter}</div>`;
        counter++;
    }
    counter += 12;
});

document.querySelector('#left').innerHTML = html;

html = '';
counter = 1;

rows.forEach ( eachrow => {
    counter += 12;
    for (let i=0; i<3; i++) {
        html += `<div id="${eachrow + counter}">${counter}</div>`;
        counter++;
    }
    html += `<div class="label">${eachrow.toUpperCase()}</div>`;
});

document.querySelector('#right').innerHTML = html;

html = '';
counter = 1;

rows.forEach (eachrow => {
    counter += 3;
    for (let i=0; i<9; i++) {
        html += `<div class="${eachrow + counter}">${counter}</div>`;
        counter++;
    }
    counter +=3;
});

document.querySelector('#middle').innerHTML = html;