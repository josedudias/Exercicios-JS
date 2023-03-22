function exercicio1() {
  const n1 = Number(document.getElementById("numero1").value);
  const n2 = Number(document.getElementById("numero2").value);

  const resultado = n1 - n2;

  document.getElementById("resultado").innerHTML = `A subtração é ${resultado}`;
}

function exercicio2() {
  const n1 = Number(document.getElementById("numero1").value);
  const n2 = Number(document.getElementById("numero2").value);
  const n3 = Number(document.getElementById("numero3").value);

  const resultado = n1 * n2 * n3;

  document.getElementById(
    "resultado"
  ).innerHTML = `A multiplicação é ${resultado}`;
}

function exercicio3() {
  const n1 = Number(document.getElementById("numero1").value);
  const n2 = Number(document.getElementById("numero2").value);

  if (n2 === 0) {
    document.getElementById(
      "resultado"
    ).innerHTML = `Não é possível dividir por 0`;
    return;
  }

  const resultado = n1 / n2;
  document.getElementById("resultado").innerHTML = `A divisão é ${resultado}`;
}

function exercicio4() {
  const n1 = Number(document.getElementById("nota1").value);
  const n2 = Number(document.getElementById("nota2").value);

  const resultado = (n1 * 2 + n2 * 3) / 5;

  document.getElementById(
    "resultado"
  ).innerHTML = `A média ponderada é ${resultado}`;
}

function exercicio5() {
  const preco = Number(document.getElementById("preco").value);

  const desconto = preco * 0.1;

  const resultado = preco - desconto;

  document.getElementById(
    "resultado"
  ).innerHTML = `O Valor final do produto com desconto é ${resultado}`;
}

function exercicio6() {
  const salario = Number(document.getElementById("salario").value);
  const vendas = document.getElementById("vendas").value;
  const comissao = vendas * 0.04;
  const salarioFinal = salario + comissao;

  document.getElementById("comissao").innerHTML = `A comissão é ${comissao}`;
  document.getElementById(
    "resultado"
  ).innerHTML = `O salario final é ${salarioFinal}`;
}

function exercicio7() {
  const peso = Number(document.getElementById("peso").value);

  const emagrecer = peso * 0.15;
  const engordar = peso * 0.2;

  const resultadoEmagrecer = peso - emagrecer;
  const resultadoEngordar = peso + engordar;

  document.getElementById(
    "resultado"
  ).innerHTML = `O peso ideal para emagrecer é ${resultadoEmagrecer} e para engordar é ${resultadoEngordar}`;
}

function exercicio8() {
  const peso = Number(document.getElementById("peso").value);

  const resultado = peso * 1000;

  document.getElementById(
    "resultado"
  ).innerHTML = `O peso em gramas é ${resultado}`;
}

function exercicio9() {
  const baseMaior = Number(document.getElementById("baseMaior").value);
  const baseMenor = Number(document.getElementById("baseMenor").value);
  const altura = Number(document.getElementById("altura").value);

  const resultado = ((baseMaior + baseMenor) * altura) / 2;

  document.getElementById(
    "resultado"
  ).innerHTML = `A área do trapézio é ${resultado}`;
}

function exercicio10() {
  const lado = Number(document.getElementById("lado").value);

  const resultado = lado * lado;

  document.getElementById(
    "resultado"
  ).innerHTML = `A área do quadrado é ${resultado}`;
}

function exercicio11() {
  const lado = Number(document.getElementById("lado").value);

  const resultado = lado * lado;

  document.getElementById(
    "resultado"
  ).innerHTML = `A área do quadrado é ${resultado}`;
}

function exercicio12() {
  const salario = Number(document.getElementById("salario").value);
  const salarioMinimo = Number(document.getElementById("salarioMinimo").value);

  const resultado = salario / salarioMinimo;

  document.getElementById(
    "resultado"
  ).innerHTML = `A quantidade de salários mínimos é ${resultado.toFixed(2)}`;
}

function exercicio13() {
  const numero = Number(document.getElementById("numero").value);

  let resultado = "";

  for (let i = 1; i <= 10; i++) {
    resultado += `${numero} x ${i} = ${numero * i} <br>`;
  }

  document.getElementById(
    "resultado"
  ).innerHTML = `A tabuada do número ${numero} é: <br> ${resultado}`;
}

function exercicio14() {
  const ano = Number(document.getElementById("ano").value);
  const anoAtual = Number(document.getElementById("anoAtual").value);

  const resultadoAno = anoAtual - ano;
  const resultadoMeses = resultadoAno * 12;
  const resultadoSemana = resultadoDias / 7;
  const resultadoDias = resultadoMeses * 30;
  const resultadoHoras = resultadoDias * 24;
  const resultadoMinutos = resultadoHoras * 60;

  document.getElementById(
    "resultado"
  ).innerHTML = `A idade é ${resultadoAno} anos, ${resultadoMeses} meses, ${resultadoSemana} semanas, ${resultadoDias} dias, ${resultadoHoras} horas e ${resultadoMinutos} minutos`;
}

function exercicio15() {
  const salario = Number(document.getElementById("salario").value);
  const conta1 = Number(document.getElementById("conta1").value);
  const conta2 = Number(document.getElementById("conta2").value);

  const resultado = salario - (conta1 + conta1 * 0.02 + conta2 + conta2 * 0.02);

  document.getElementById(
    "resultado"
  ).innerHTML = `O restante do salário é ${resultado.toFixed(2)}`;
}

function exercicio16() {
  const cateto1 = Number(document.getElementById("cateto1").value);
  const cateto2 = Number(document.getElementById("cateto2").value);

  const resultado = Math.sqrt(cateto1 * cateto1 + cateto2 * cateto2);

  document.getElementById(
    "resultado"
  ).innerHTML = `A hipotenusa é ${resultado.toFixed(2)}`;
}

function exercicio17() {
  const raio = Number(document.getElementById("raio").value);

  const comprimento = 2 * Math.PI * raio;
  const area = Math.PI * raio * raio;
  const volume = (4 / 3) * Math.PI * raio * raio * raio;

  document.getElementById(
    "resultado"
  ).innerHTML = `O comprimento é ${comprimento} <br> A área é ${area} <br> O volume é ${volume}`;
}

function exercicio18() {
  const celcius = Number(document.getElementById("celcius").value);

  const fahrenheit = celcius * 1.8 + 32;

  document.getElementById(
    "resultado"
  ).innerHTML = `A temperatura em Fahrenheit é ${fahrenheit}`;
}

function exercicio19() {
  const largura = Number(document.getElementById("largura").value);
  const comprimento = Number(document.getElementById("comprimento").value);

  const potencia = largura * comprimento * 18;

  document.getElementById(
    "resultado"
  ).innerHTML = `A potência de iluminação é ${potencia}W`;
}

function exercicio20() {
  const angulo = Number(document.getElementById("angulo").value);
  const distancia = Number(document.getElementById("distancia").value);

  const anguloResultado = (angulo * Math.PI) / 180;

  const medidaEscada = distancia / Math.cos(angulo);

  document.getElementById(
    "resultado"
  ).innerHTML = `A medida da escada é: ${medidaEscada.toFixed(
    2
  )} unidades de medida`;
}

function exercicio21() {
  const horas = Number(document.getElementById("horas").value);
  const salariominimo = Number(document.getElementById("salariominimo").value);
  const horasextras = Number(document.getElementById("horasextras").value);

  const horatrabalhada = salariominimo / 8;

  const horaExtra = salariominimo / 4;

  const salariobruto = horas * horatrabalhada + horasextras * horaExtra;

  const receberExtra = horasextras * horaExtra;

  const salarioRecer = salariobruto + receberExtra;

  document.getElementById(
    "resultado"
  ).innerHTML = `O salário a receber é ${salarioRecer}`;
}

function exercicio22() {
  const lados = Number(document.getElementById("lados").value);

  const diagonais = (lados * (lados - 3)) / 2;

  document.getElementById(
    "resultado"
  ).innerHTML = `O número de diagonais de um polígono convexo é ${diagonais}`;
}

function exercicio23() {
  const angulo1 = Number(document.getElementById("angulo1").value);
  const angulo2 = Number(document.getElementById("angulo2").value);

  const angulo3 = 180 - (angulo1 + angulo2);

  document.getElementById(
    "resultado"
  ).innerHTML = `O terceiro ângulo é ${angulo3}`;
}

function exercicio24() {
  const real = Number(document.getElementById("real").value);

  const dolar = real * 1.8;
  const marco = real * 2;
  const libra = real * 3.57;

  document.getElementById(
    "resultado"
  ).innerHTML = `A conversão em Dolár é ${dolar}, em Marco Alemão é ${marco} e em Libra Esterlina é ${libra}`;
}

function exercicio25() {
  const horas = Number(document.getElementById("horas").value);
  const minutos = Number(document.getElementById("minutos").value);

  const minutosDaHora = horas * 60;
  const totalMinutos = minutosDaHora + minutos;
  const totalSegundos = totalMinutos * 60;

  document.getElementById(
    "resultado"
  ).innerHTML = `O horario em minutos é ${minutosDaHora} o total de minutos é ${totalMinutos} e o total de segundos é ${totalSegundos}`;
}
