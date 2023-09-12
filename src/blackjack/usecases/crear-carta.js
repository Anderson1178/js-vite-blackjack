/**
 *
 * @param {String} carta
 * @returns {HTMLElement} HTML de retorno
 */

export const crearCarta = (carta) => {
  if (!carta) throw new Error("La carta es requerida");
  const creaCarta = document.createElement("img");
  creaCarta.src = `assets/cartas/${carta}.png`;
  creaCarta.classList.add("cartas");
  return creaCarta;
};
