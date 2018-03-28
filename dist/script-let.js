'use strict';

var buttons = document.querySelectorAll('button');

// обход массива

var _loop = function _loop(i) {
    var button = buttons[i];
    button.innerText = i;
    button.onclick = function () {
        console.log(i);
    };
};

for (var i = 0; i < buttons.length; i++) {
    _loop(i);
}

//============================================
var arr = [1, 2, 3];

function add(a, b, c) {
    console.log(a + b + c);
}

add.apply(undefined, arr);

//============================================
function heloo(name) {
    console.log('Hello ' + name);
}
heloo('vlad');
//============================================