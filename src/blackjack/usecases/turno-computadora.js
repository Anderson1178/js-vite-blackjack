import { pedirCarta, valorCarta, crearCarta } from "./";
/**
 *
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHtml Html para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora Html para mostrar los puntos
 * @param {Array <String>} deck
 */
export const turnoComputadora = (
  puntosMinimos,
  puntosHtml,
  divCartasComputadora,
  deck = []
) => {
  if (!puntosMinimos) throw new Error("Puntos minimos es requerido");
  if (!puntosHtml) throw new Error("Puntos Html es requerido");

  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);
    puntosComputadora += valorCarta(carta);
    puntosHtml.innerText = puntosComputadora;

    const creaCarta = crearCarta(carta);
    divCartasComputadora.append(creaCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador gana :)");
    } else {
      alert("Computadora gana");
    }
  }, 10);
};
