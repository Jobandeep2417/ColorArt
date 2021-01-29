// const colors = require('colors')
// const figlet = require('figlet');


let btn = document.querySelector('#btn-get');
let text = document.querySelector('#TextArea')
let output = document.querySelector('#output')
let ele = document.getElementsByName('btnradio')



btn.addEventListener('click', () => {

    output.innerText = text.value;
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            document.querySelector('#output').style.color = ele[i].value;
        }
    }
})






// figlet('Hello World!!', function (err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data.rainbow)
// });