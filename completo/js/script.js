var spanHora = document.querySelector(
  ".secao-hora .secao__rodape__valor span"
);

var inputGanhoPorMes = document.querySelector("#ganho-mes");
inputGanhoPorMes.addEventListener("keyup", function retornarGanhoMes() {
  calculaValorHora();
});

var inputHorasPorDia = document.querySelector("#horas-dia");
inputHorasPorDia.addEventListener("keyup", function retornarHorasDia() {
  calculaValorHora();
});

function calculaValorHora() {
  var qtdTotalDeHoras = parseFloat(inputHorasPorDia.value) * 22;

  var valorDeHora = parseFloat(
    inputGanhoPorMes.value / qtdTotalDeHoras
  ).toFixed(2);

  // var valorDeHoraFormatado;
  // if (!isNaN(valorDeHora) && isFinite(valorDeHora)) {
  //   valorDeHoraFormatado = Math.ceil(valorDeHora) + ",00";
  // } else {
  //   valorDeHoraFormatado = "0,00";
  // }

  // caso tenha tempo hábil
  // spanHora.innerText = "R$ " + Math.ceil(valorDeHora) + ",00";

  spanHora.textContent = "R$ " + valorDeHora;
}
