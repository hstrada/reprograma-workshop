var spanHora = document.querySelector(".secao-hora .secao__rodape__valor span");

var inputGanhoPorMes = document.querySelector("#ganho-mes");

var inputHorasPorDia = document.querySelector("#horas-dia");

function calcularValorHora() {
  // caso utilize div ao invés de form, para quem preferir, o preventDefault não será necessário
  // event.preventDefault();
  var qtdTotalDeHoras = inputHorasPorDia.valueAsNumber * 22;

  var valorDeHora = (inputGanhoPorMes.valueAsNumber / qtdTotalDeHoras).toFixed(2);

  // caso tenha tempo hábil
  // spanHora.textContent = "R$ " + Math.ceil(valorDeHora) + ",00";

  spanHora.textContent = "R$ " + valorDeHora;
}
