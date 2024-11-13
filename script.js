/*
function bloquearCopia() {
  // Bloqueia o clique direito
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Cópia desabilitada no site.");
  });

  // Bloqueia a seleção de texto
  document.addEventListener("selectstart", (e) => {
    e.preventDefault();
    alert("Seleção de texto desabilitada.");
  });
}

*/
function gerarTabuadaPar() {
  const inputNumero = document.getElementById("inputNumero").value;
  const resultadoTabuada = document.getElementById("resultadoTabuada");

  if (Number.isNaN(inputNumero)) {
    resultadoTabuada.innerText = "numero invalido";
    return;
  }
  let tabuada = `Tabuada do ${inputNumero} (Somente Numeros Pares)`;
  for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
      tabuada += `${inputNumero} x ${i} = ${inputNumero * i}\n`;
    }
  }
  resultadoTabuada.innerText = tabuada;
}

function verificarParImpar() {
  const numParImpar = document.getElementById("numParImpar").value;
  const resultadoParImpar = document.getElementById("resultadoParImpar");
  if (numParImpar % 2 === 0) {
    resultadoParImpar.innerText = "O numero é par";
  } else {
    resultadoParImpar.innerText = "O numero é impar";
  }
}

function calcularMedia() {
  const nota1 = document.getElementById("nota1").value;
  const nota2 = document.getElementById("nota2").value;
  const nota3 = document.getElementById("nota3").value;
  const resultadoMedia = document.getElementById("resultadoMedia");
  const nota1C = Number(nota1);
  const nota2C = Number(nota2);
  const nota3C = Number(nota3);
  const media = nota1C + nota2C + nota3C;

  resultadoMedia.innerText = media / 3;
}

function somarPares() {
  const num = document.getElementById("numSomaPares").value;
  const numC = Number(num);
  const resultadoSomaPares = document.getElementById("resultadoSomaPares");
  let soma = 0;
  for (let i = 0; i <= numC; i++) {
    if (i % 2 === 0) {
      soma = soma + i;
    }
  }
  resultadoSomaPares.innerText = `O resulatdo da soma é ${soma}`;
}

function validarLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const resultadoLogin = document.getElementById("resultadoLogin");
  if (username === "admin" && password === "1234") {
    resultadoLogin.innerText = "a usuario e senha esta correto";
  } else {
    resultadoLogin.innerText = "senha ou usuario errado";
  }
}

function calcularFatorial() {
  const numFatorial = document.getElementById("numFatorial").value;
  const resultadoFatorial = document.getElementById("resultadoFatorial");

  const fa = Number(numFatorial);
  let fatorial = 1;
  if (fa < 0) {
    resultadoFatorial.innerText =
      "Fatorial não definido para numeros abaixo de 0";
  }
  for (let i = 2; i <= fa; i++) {
    fatorial = fatorial * i;
  }
  resultadoFatorial.innerText = `esse é o resultado ${fatorial}`;
}
