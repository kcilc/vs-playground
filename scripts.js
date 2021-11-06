console.log('Hi!');

function insertGreeting(phrase) {
    console.log(phrase);
    let textual = document.getElementById('phrase-wrapper');
    textual.innerText(phrase);
}

insertGreeting('We re live!');
