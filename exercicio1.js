// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui

const G = 6.67e-11;

function gravitLaw(m1, m2, d) {
  if (d === 0) throw "Two bodies cannot occupy the same space";
  return (G * m1 * m2) / Math.pow(d, 2);
}

const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

calcular.onclick = function (event) {
  const m1 = document.getElementById("massa1").value;
  const m2 = document.getElementById("massa1").value;
  const d = document.getElementById("distancia").value;

  try {
    resultado.value = gravitLaw(Number(m1), Number(m2), Number(d));
  } catch (error) {
    alert(error.message || error);
  }
};
