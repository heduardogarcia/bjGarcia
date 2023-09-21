// 2C 2 de clubs(trebol)
// 2D 2 de diamantes
// 2H 2 de corazones
// 2S 2 de espadas

let deck = [];

const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

let puntosJugador = 0,
  puntosPc = 0;

const btnPedir = document.querySelector("#btnPedir");
const smallsPuntos = document.querySelectorAll("small");

const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (const tipo of tipos) {
    for (const especial of especiales) {
      deck.push(especial + tipo);
    }
  }
  deck = _.shuffle(deck);
  return deck;
};

crearDeck();
const pedirCarta = () => {
  if (deck.length === 0) {
    throw "No hay mas cartas en el deck";
  }

  carta = deck.pop();
  deck = _.shuffle(deck);
  return carta;
};

// pedirCarta();
const valorCarta = (carta) => {
  valor = carta.substring(0, carta.length - 1);

  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};

const vale = valorCarta(pedirCarta());

btnPedir.addEventListener("click", () => {
  console.log("CLICK");
  const carta = pedirCarta();
  puntosJugador += valorCarta(carta);
  smallsPuntos[0].innerText = puntosJugador;
});
