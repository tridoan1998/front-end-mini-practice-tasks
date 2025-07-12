const jokesDiv = this.window.document.querySelector('.jokesDiv');
const jokesGeneratorBtn = this.window.document.querySelector('.jokesGeneratorBtn');

let url = 'https://icanhazdadjoke.com/';
let timeOut = 10000;

function setWaitTime() {
    
}
async function generateJokes() {
    try {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch(error) {

    } finally {

    }
}
jokesGeneratorBtn.addEventListener('click', function(e) {
    generateJokes();
})