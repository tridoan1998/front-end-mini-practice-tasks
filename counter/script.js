const minusButton = this.window.document.getElementById('minus_button');
const refreshButton = this.window.document.getElementById('refresh_button');
const plusButton = this.window.document.getElementById('plus_button');
const counterId = this.window.document.getElementById('counter_value');

let counter = 0;

minusButton.addEventListener("click", function(event){
    counter--;
    counterId.innerHTML = counter;
});

refreshButton.addEventListener("click", function(event) {
    counter = 0;
    counterId.innerHTML = counter;
});

plusButton.addEventListener("click", function(event) {
    counter++;
    counterId.innerHTML = counter;
});



