const abrirBtn = document.getElementById("abrirPopup");
const cerrarBtn = document.querySelector(".close-btn");
const popup = document.getElementById("popup");
const contenido = document.querySelector(".image-container");

abrirBtn.addEventListener("click", () => {
  popup.classList.add("popup-show");
  contenido.classList.add("blurred");
});

cerrarBtn.addEventListener("click", () => {
  popup.classList.remove("popup-show");
  contenido.classList.remove("blurred");
});
