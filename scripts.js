function insertGreeting(phrase) {
    let textual = document.getElementById('phrase-wrapper');
    textual.innerText(phrase);
}

window.addEventListener('load', insertGreeting('We\'re live!'));
