import "/style.css";
import _ from "underscore";
import {
  crearDeck,
  pedirCarta,
  valorCarta,
  turnoComputadora,
  crearCarta,
} from "./usecases/index.js";

(() => {
  "use strict";

  let deck = [];
  const tipos = ["C", "D", "H", "S"];
  const especiales = ["A", "J", "Q", "K"];

  let puntosJugador = 0,
    puntosComputadora = 0;

  const btnPedir = document.querySelector("#btnPedir");
  const btnDetener = document.querySelector("#btnDetener");
  const btnNuevo = document.querySelector("#btnNuevo");

  const puntosHtml = document.querySelectorAll("small");
  const divCartasJugador = document.querySelector("#jugador-cartas");
  const divCartasComputadora = document.querySelector("#computadora-cartas");

  deck = crearDeck(tipos, especiales);

  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta(deck);

    puntosJugador += valorCarta(carta);
    puntosHtml[0].innerText = puntosJugador;

    const creaCarta = crearCarta(carta);
    divCartasJugador.append(creaCarta);

    if (puntosJugador > 21 || puntosJugador === 21) {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(
        puntosJugador,
        puntosHtml[1],
        divCartasComputadora,
        deck
      );
    }
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, puntosHtml[1], divCartasComputadora, deck);
  });

  btnNuevo.addEventListener("click", () => {
    console.clear();
    deck = [];
    deck = crearDeck(tipos, especiales);

    puntosJugador = 0;
    puntosComputadora = 0;
    puntosHtml[0].innerText = 0;
    puntosHtml[1].innerText = 0;
    divCartasComputadora.innerHTML = "";
    divCartasJugador.innerHTML = "";

    btnPedir.disabled = false;
    btnDetener.disabled = false;
  });
})();
