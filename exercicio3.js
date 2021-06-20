// Faça o exercício dos PARÁGRAFOS aqui

const expandableButtons = document.querySelectorAll(".botao-expandir-retrair");

expandableButtons.forEach((element) => {
  element.onclick = (event) => {
    const parent = event.target.parentNode;
    event.target.innerHTML = event.target.innerHTML === "+" ? "-" : "+";
    parent.classList.toggle("expandido");
  };
});
