var inputAno = document.querySelector('#ano');

var paragrafoResposta = document.querySelector('#respostaAno')

function cliquei() {
    paragrafoResposta.innerHTML = inputAno.valueAsNumber
}