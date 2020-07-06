// versão original
/* var formularioHora = document.querySelector(".secao-hora form");
var spanHora = document.querySelector(".secao-hora .secao__rodape__valor span");

function calculaValorHora() {
  // entrada
  var formHora = this;
  var ganhoPorMes = converteDinheiro(formHora["ganho-mes"].value);
  var horasPorDia = parseFloat(formHora["horas-dia"].value);
  var diasPorMes = parseFloat(formHora["dias-mes"].value);

  var qtdTotalDeHoras = horasPorDia * diasPorMes;

  var valorDeHora = parseFloat(ganhoPorMes / qtdTotalDeHoras).toFixed(2);

  console.log(valorDeHora);

  var valorDeHoraFormatado;
  if (!isNaN(valorDeHora) && isFinite(valorDeHora)) {
    valorDeHoraFormatado = Math.ceil(valorDeHora) + ",00";
  } else {
    valorDeHoraFormatado = "0,00";
  }

  console.log(valorDeHoraFormatado);

  // saida
  spanHora.innerHTML = "R$ " + valorDeHoraFormatado;
}

formularioHora.addEventListener("change", calculaValorHora); */

/**
 *
 * Nova versão separada em 3 etapas.
 * Fiz a alteração de remover o this, e outros cálculos para que fique o mais objetivo possível.
 *
 */

// INÍCIO

/* const inputGanhoPorMes = document.querySelector("#ganho-mes");
inputGanhoPorMes.addEventListener("keyup", function retornar() {
  calculaValorHora();
});
const inputHorasPorDia = document.querySelector("#horas-dia");
inputHorasPorDia.addEventListener("keyup", function retornar() {
  calculaValorHora();
});

// camelCase
function calculaValorHora() {
  console.log("teste");
} */

// REALIZAR CONTA

/* const inputGanhoPorMes = document.querySelector("#ganho-mes");
inputGanhoPorMes.addEventListener("keyup", function retornarGanhoMes() {
  calculaValorHora();
});
const inputHorasPorDia = document.querySelector("#horas-dia");
inputHorasPorDia.addEventListener("keyup", function retornarHorasDia() {
  calculaValorHora();
});

// camelCase
function calculaValorHora() {
  const qtdTotalDeHoras = parseFloat(inputHorasPorDia.value) * 22;

  const valorDeHora = parseFloat(
    inputGanhoPorMes.value / qtdTotalDeHoras
  ).toFixed(2);

  console.log(valorDeHora);
} */

// APRESENTAR RESULTADO
const spanHora = document.querySelector(
  ".secao-hora .secao__rodape__valor span"
);

const inputGanhoPorMes = document.querySelector("#ganho-mes");
inputGanhoPorMes.addEventListener("keyup", function retornarGanhoMes() {
  calculaValorHora();
});
const inputHorasPorDia = document.querySelector("#horas-dia");
inputHorasPorDia.addEventListener("keyup", function retornarHorasDia() {
  calculaValorHora();
});

// camelCase
function calculaValorHora() {
  const qtdTotalDeHoras = parseFloat(inputHorasPorDia.value) * 22;

  const valorDeHora = parseFloat(
    inputGanhoPorMes.value / qtdTotalDeHoras
  ).toFixed(2);

  console.log(valorDeHora);

  var valorDeHoraFormatado;
  if (!isNaN(valorDeHora) && isFinite(valorDeHora)) {
    valorDeHoraFormatado = Math.ceil(valorDeHora) + ",00";
  } else {
    valorDeHoraFormatado = "0,00";
  }

  console.log(valorDeHoraFormatado);

  // saida
  spanHora.innerHTML = "R$ " + valorDeHoraFormatado;
}
