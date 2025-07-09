document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});
const popup = document.getElementById("popup");
    const popupText = popup.querySelector("p");
    const closeBtn = document.querySelector(".close-btn");
    const mensajes = [
   "Nuestra primer salida afuera del colegio. Yo estaba re nervioso por estar tanto tiempo a solas que no se me venian temas de conversaciones para sacarte charla. Y encima di pena con mi helado todo derretido.",
    "Ese dia te acostaste en mi hombro porque querias dormir y yo me moria de la ternura, y encima no dormiste nada porque yo me movia a cada rato como un perrite",
    "La primera vez que te pedi que nos saquemos una foto aunque me dio verguenza, y sali re feo",
    "Nuestra foto mas bella de mi cumple, ese dia me hiciste pasarla tan lindo que jamas te vas a dar una idea, gracias mi vida.",
    "El dia mas importante de este 2025, cuando por fin noc hicimos novios. Desde ese dia, supe que eras el amor de mi vida eterno.",
    "Cuando fui a tu casa y me acoste en tu pecho re comodo, fue re hermoso ese dia.",
    "Tu foto favorita. Saliste hermosa, pero vos sabes que yo devore mas, amor.",
    "Nuestra primer salida despues del colegio del 2025, que mi mama encima andaba dando vueltas por Polvorines.",
    "Una fotito de nuestro server de minecraft, y de fondo tus 500 gatitos bellos.",
    "Una foto bella en el trauma, salimos matados igual.",
    "Fuimos a tomar helados despues de ir a tu casa.",
    "En el comedor eatinggg, bellakos.",
    "Una fotito en Polvorines, que ese dia llegaste tarde como siempre ushhh.",
    "In my house eating ice cream de chill.",
    "Una de mis fotos favoritas hasta ahora, te adoro un monton mi gordita. Gracias por todo",
    "Comiendo juntitos en el comedor, super bellites nosotros.",
    "No me acuerdo donde fue esta foto pero se que en el colegio, CREO que fue en el campo.",
    "Sinceramente no se donde fue esta foto mi amor, sorri.",
    "En la school chill con mi bbbb.",
    "Comiendo panchos con el amor de mi vida, la primera vez despues de 5 meses de novios USH. Yo te estaba molestando y te enojaste como una perrite.",
    "Una foto hermosa. Te ves tan linda cuando vas a ingles, no se por que, pero me te miro y me brillan los ojos.",
    "Fotito de la bella de cabrita okei",
    "Eating en el comedor como siempreee",
    "Una carita de PERRE hiciste ash.",
    "Chimuelite okei, nada mas que decir",
    "Una beibi bebita comiendo hamburguesita super belle.",
    "El amor de mi vida y yo."
    ];

    document.querySelectorAll(".image-box p").forEach((p, index) => {
      p.style.cursor = "pointer";
      p.addEventListener("click", () => {
        popupText.textContent = mensajes[index] || "Un día especial 💌";
        popup.classList.add("popup-show");
      });
    });

    closeBtn.addEventListener("click", () => {
      popup.classList.remove("popup-show");
    });

    window.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.classList.remove("popup-show");
      }
    });

    // Scroll top
    const topBtn = document.getElementById("topBtn");
    window.onscroll = () => {
      topBtn.style.display = (document.documentElement.scrollTop > 300) ? "block" : "none";
    };
    topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });



  // Elegí tu fecha importante (editá esto)
  const fechaEspecial = new Date("2025-10-08T00:00:00").getTime();
  const contadorElem = document.getElementById("contador");

  function actualizarContador() {
    const ahora = new Date().getTime();
    const distancia = fechaEspecial - ahora;

    if (distancia < 0) {
      contadorElem.innerHTML = "¡Felices 17, mi gorda hermosa!";
      clearInterval(contadorInterval);
      return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    contadorElem.innerHTML = `${dias} días, ${horas}h ${minutos}m ${segundos}s`;
  }

  // Actualiza cada segundo
  const contadorInterval = setInterval(actualizarContador, 1000);
  actualizarContador();

  const frases = [
    "Sos mi lugar favorito Lourdes.",
    "Te amo muchisimo mas de lo que pensas o demuestro.",
    "Mi vida es más linda desde que estas en ella.",
    "Mi corazoncito tiene escrito tu nombre.",
    "Siempre podes contar conmigo, pase lo que pase",
    "Estaria enamorado de vos, en esta vida y en cualquiera.",
    "Cada risa, cada enojo, y cada momento que se te ocurra, no me lo olvido nunca.",
    "Sos lo mejor que una persona puede tener en su vida"
    
  ];
  const indiceAleatorio = Math.floor(Math.random() * frases.length);
  document.querySelector(".frase").textContent = frases[indiceAleatorio];
