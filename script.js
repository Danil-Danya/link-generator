let button = document.querySelector('.button');
let input = document.querySelector('.input');
let select = document.querySelector('.select');
let inputs = document.querySelector('.inputs');

function crateLink () {
    let valueSelect = select.value;
    let valueInput = input.value;
    
    let link = document.createElement('a');
    link.innerHTML = valueInput;
    link.setAttribute('href', `https://${valueInput}${valueSelect}`);
    inputs.append(link);
}
 
button.addEventListener('click', function () {
    crateLink();
    input.value = '';
});

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 13){
        crateLink();
        input.value = '';
    }
})
