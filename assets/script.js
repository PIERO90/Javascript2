// desafio1
const imgContainer = document.getElementById("car-img");
console.log(imgContainer);
let clickCounter = 0;
imgContainer.addEventListener("click", () => {
  clickCounter += 1;
  if (clickCounter % 2 == 1) {
    console.log(clickCounter);
    imgContainer.style.border = "10px solid purple";
  } else {
    imgContainer.style.border = "";
  }
});

// desafio 2
const calcularBtn = document.getElementById("calcularBtn");
const result = document.getElementById("result");

calcularBtn.addEventListener("click", () => {
  const cantidadSticker1 = parseInt(document.getElementById("sticker1").value);
  const cantidadSticker2 = parseInt(document.getElementById("sticker2").value);
  const cantidadSticker3 = parseInt(document.getElementById("sticker3").value);

  const totalStickers = cantidadSticker1 + cantidadSticker2 + cantidadSticker3;

  if (totalStickers <= 10) {
    result.textContent = `Llevas ${totalStickers} stickers`;
  } else {
    result.textContent = "Llevas demasiados stickers";
  }
});

// desafio3

const ingresarBtn = document.getElementById("ingresarBtn");
const resultado = document.getElementById("resultado");

ingresarBtn.addEventListener("click", () => {
  const password1 = document.getElementById("primer-digito").value;
  const password2 = document.getElementById("segundo-digito").value;
  const password3 = document.getElementById("tercer-digito").value;

  if (password1 === "9" && password2 === "1" && password3 === "1") {
    resultado.textContent = "Password 1 correcto";
  } else if (password1 === "7" && password2 === "1" && password3 === "4") {
    resultado.textContent = "Password 2 correcto";
  } else {
    resultado.textContent = "Password incorrecto";
  }
});
