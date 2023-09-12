import _ from "underscore";

/**
 *Esto crea un nuevo Deck
 * @param {Array <String>} tiposCarta Ejemplo ["C", "D", "H", "S"]
 * @param {Array <String>} tiposEspeciales Ejemplo ["A", "J", "Q", "K"]
 * @returns {Array <String>}Esto retorna un nuevo Deck
 */
export const crearDeck = (tiposCarta, tiposEspeciales) => {
  if (!tiposCarta || tiposCarta.length === 0)
    throw new Error("TiposCarta es obligatorio como un arreglo de string");

  if (!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error("TiposEspeciales es obligatorio como un arreglo de string");

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposCarta) {
      deck.push(i + tipo);
    }
  }
  for (let tipo of tiposCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  deck = _.shuffle(deck);
  return deck;
};
