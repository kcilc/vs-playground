function insertGreeting(phrase) {
    let textual = document.getElementById('phrase-wrapper');
    textual.innerText = phrase;
}

window.addEventListener('DOMContentLoaded', ()=> insertGreeting('We\'re live!'));
