var buttons = document.querySelectorAll('button');

// обход массива
for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.innerText = i;
    button.onclick = function () {
        console.log(i);
    }
}

//============================================
let arr = [1,2,3];

function add(a,b,c){
    console.log(a + b + c);
}

add(...arr);

//============================================
function heloo(name) {
    console.log(`Hello ${name}`)
}
heloo('vlad');
//============================================

