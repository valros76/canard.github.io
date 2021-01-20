var btn = document.getElementById('reponseAide');
var rejouer = document.getElementById('rejouer');

var question = document.getElementById("questionText")
rejouer.setAttribute("disabled", true)

var reponses = ["dsl je ne peux vous aider", "attendez!", "j'avais pas compris votre question", "j'arrive !", "vous faite quoi la !", "vous ne voyez pas le canard !", "vous ne voyez pas que suis au telephone", "essayez ultérieurement"];
var reponses_temp = []

reponses.forEach((e) => {
    reponses_temp.push(e)
})

let rndNbr = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function reponse(button, reset) {
    if (reponses_temp != undefined) {
        if (reponses_temp.length < 1) {
            reponses_temp = reponses_temp.concat(reponses)
        }
    }
    let randomNbr = rndNbr(0, (reponses_temp.length - 1))
    var AfficheReponse = document.getElementById('reponse').innerHTML = reponses_temp[randomNbr];
    reponses_temp.splice(randomNbr , 1)
    reset.removeAttribute("disabled")
    button.setAttribute("disabled", true)
    return AfficheReponse
}
btn.addEventListener('click', (e) => {
    e.preventDefault()
    if(question.value != ""){
        reponse(btn, rejouer)
    }
});

function effacer(button, reset) {
    document.getElementById('reponse').innerHTML = " ";
    var ec = document.getElementById('questionText');
    ec.value = "";
    button.removeAttribute("disabled")
    reset.setAttribute("disabled", true)
}
rejouer.addEventListener('click', (e) => {
    e.preventDefault()
    effacer(btn, rejouer)
});

